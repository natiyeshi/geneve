"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, X } from "lucide-react"

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Close the dialog
      onOpenChange(false)
      // Redirect to packages page with query parameter
      router.push(`/packages?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open && e.key === "Enter" && searchQuery.trim()) {
        router.push(`/packages?q=${encodeURIComponent(searchQuery.trim())}`)
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, searchQuery, router, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-6">
        <form onSubmit={handleSearch}>
          <div className="text-2xl font-serif text-[#09163A] mb-6">Search Genève</div>
          <div className="relative mb-6">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search attractions, packages, and more..."
              className="pl-10 pr-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Press <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> to search
            </div>
            <Button
              type="submit"
              className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white"
              disabled={!searchQuery.trim()}
            >
              Search
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
