"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Mail, Trash2, Check, Archive, Reply } from "lucide-react";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied" | "archived";
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export default function MessagesPage() {
  const { data: session, status: sessionStatus } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      window.location.href = "/api/auth/signin";
      return;
    }
  }, [sessionStatus]);

  const fetchMessages = async () => {
    if (sessionStatus !== "authenticated") return;
    
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/contact?${filterStatus !== "all" ? `status=${filterStatus}&` : ""}page=${page}&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/api/auth/signin";
          return;
        }
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `Failed to fetch messages: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.messages) {
        throw new Error("Invalid response format from server");
      }
      setMessages(data.messages);
      setPagination(data.pagination);
    } catch (err: any) {
      console.error("Error fetching messages:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      fetchMessages();
    }
  }, [sessionStatus, page, filterStatus]);

  const handleStatusChange = async (messageId: string, newStatus: string) => {
    try {
      const response = await fetch("/api/contact", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: messageId,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update message status");
      }

      // Update local state
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === messageId ? { ...msg, status: newStatus as Message["status"] } : msg
        )
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: messageId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      // Update local state
      setMessages((prev) => prev.filter((msg) => msg._id !== messageId));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const getStatusBadge = (status: Message["status"]) => {
    const variants = {
      unread: "default",
      read: "secondary",
      replied: "success",
      archived: "outline",
    };

    return (
      <Badge variant={variants[status] as any}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (sessionStatus === "loading") {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (sessionStatus === "unauthenticated") {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Messages</h1>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Messages</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        {messages.map((message) => (
          <Card key={message._id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <CardTitle className="text-lg">{message.subject}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    From: {message.name} ({message.email})
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(message.status)}
                <div className="flex space-x-1">
                  {message.status === "unread" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleStatusChange(message._id, "read")}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                  {message.status !== "replied" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleStatusChange(message._id, "replied")}
                    >
                      <Reply className="h-4 w-4" />
                    </Button>
                  )}
                  {message.status !== "archived" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleStatusChange(message._id, "archived")}
                    >
                      <Archive className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(message._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Received: {format(new Date(message.createdAt), "PPpp")}
                </p>
                <p className="whitespace-pre-wrap">{message.message}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedMessage(message);
                    setShowDialog(true);
                  }}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {pagination && pagination.pages > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.min(pagination.pages, p + 1))}
            disabled={page === pagination.pages}
          >
            Next
          </Button>
        </div>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Received: {selectedMessage && format(new Date(selectedMessage.createdAt), "PPpp")}
              </p>
              {selectedMessage && getStatusBadge(selectedMessage.status)}
            </div>
            <div className="border rounded-lg p-4">
              <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (selectedMessage) {
                    handleStatusChange(selectedMessage._id, "replied");
                  }
                  setShowDialog(false);
                }}
              >
                Mark as Replied
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (selectedMessage) {
                    handleStatusChange(selectedMessage._id, "archived");
                  }
                  setShowDialog(false);
                }}
              >
                Archive
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  if (selectedMessage) {
                    handleDelete(selectedMessage._id);
                  }
                  setShowDialog(false);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 