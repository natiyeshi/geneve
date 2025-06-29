"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash2, Edit, Plus, Image as ImageIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { uploadImage } from "@/utils/helper";
import Image from "next/image";

interface Attraction {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
}

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAttraction, setEditingAttraction] = useState<Attraction | null>(null);
  const [formData, setFormData] = useState({ name: "", image: "" });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchAttractions();
  }, []);

  const fetchAttractions = async () => {
    try {
      const response = await fetch("/api/attractions");
      if (response.ok) {
        const data = await response.json();
        setAttractions(data);
      }
    } catch (error) {
      toast.error("Failed to fetch attractions");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            break;
          }
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name) {
      toast.error("Please fill in the name field");
      return;
    }

    if (!editingAttraction && !image) {
      toast.error("Please upload an image");
      return;
    }

    setUploading(true);

    try {
      let imageUrl = editingAttraction?.image; // Use existing image if editing and no new image
      
      if (image) {
        const { url, error: uploadError } = await uploadImage(image);
        if (uploadError) {
          toast.error("Failed to upload image");
          setUploading(false);
          return;
        }
        imageUrl = url;
      }

      const url = editingAttraction 
        ? `/api/attractions/${editingAttraction._id}`
        : "/api/attractions";
      
      const method = editingAttraction ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, image: imageUrl }),
      });

      if (response.ok) {
        toast.success(
          editingAttraction 
            ? "Attraction updated successfully" 
            : "Attraction created successfully"
        );
        setIsDialogOpen(false);
        resetForm();
        fetchAttractions();
      } else {
        toast.error("Failed to save attraction");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (attraction: Attraction) => {
    setEditingAttraction(attraction);
    setFormData({ name: attraction.name, image: attraction.image });
    setImagePreview(attraction.image);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this attraction?")) return;

    try {
      const response = await fetch(`/api/attractions/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Attraction deleted successfully");
        fetchAttractions();
      } else {
        toast.error("Failed to delete attraction");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", image: "" });
    setEditingAttraction(null);
    setImage(null);
    setImagePreview(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading attractions...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#09163A]">Attractions</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-[#EE1D46] hover:bg-[#EE1D46]/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Attraction
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingAttraction ? "Edit Attraction" : "Add New Attraction"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter attraction name"
                  required
                />
              </div>
              
              <div>
                <Label>Image</Label>
                <input 
                  ref={fileInputRef}
                  hidden 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                />
                
                {imagePreview ? (
                  <div className="mt-2">
                    <Image 
                      src={imagePreview} 
                      width={200} 
                      height={150} 
                      alt="Preview" 
                      className="w-full h-40 object-cover rounded-md" 
                    />
                    <div className="flex gap-2 mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleButtonClick}
                      >
                        Change Image
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setImage(null);
                          setImagePreview(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div 
                    onClick={handleButtonClick}
                    onPaste={handlePaste}
                    className="w-full flex cursor-pointer hover:bg-gray-100 duration-200 rounded-md border-2 border-dashed border-gray-300 py-8 h-32"
                    tabIndex={0}
                  >
                    <div className="flex flex-col m-auto text-center">
                      <ImageIcon className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <div className="text-sm text-gray-600">Click to upload or paste image</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-[#EE1D46] hover:bg-[#EE1D46]/90"
                  disabled={uploading}
                >
                  {uploading ? (editingAttraction ? "Updating..." : "Creating...") : (editingAttraction ? "Update" : "Create")}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <Card key={attraction._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                {attraction.image ? (
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <CardTitle className="text-lg">{attraction.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(attraction)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(attraction._id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {attractions.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No attractions found. Create your first one!</p>
        </div>
      )}
    </div>
  );
} 