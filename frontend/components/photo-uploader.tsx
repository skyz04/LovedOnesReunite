"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"

interface PhotoUploaderProps {
  maxPhotos?: number
}

export function PhotoUploader({ maxPhotos = 5 }: PhotoUploaderProps) {
  const [photos, setPhotos] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newPhotos = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setPhotos((prev) => {
        const combined = [...prev, ...newPhotos]
        return combined.slice(0, maxPhotos)
      })
    }
  }

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square rounded-md overflow-hidden border bg-muted">
            <img
              src={photo || "/placeholder.svg"}
              alt={`Uploaded photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute top-1 right-1 bg-background/80 rounded-full p-1 hover:bg-background"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove photo</span>
            </button>
          </div>
        ))}

        {photos.length < maxPhotos && (
          <label className="flex flex-col items-center justify-center aspect-square rounded-md border border-dashed bg-muted/50 hover:bg-muted cursor-pointer">
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Upload Photo</span>
            </div>
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileChange}
              multiple={maxPhotos > 1}
            />
          </label>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        {photos.length} of {maxPhotos} photos uploaded.{" "}
        {maxPhotos > 1 ? `You can upload up to ${maxPhotos} photos.` : ""}
      </p>
    </div>
  )
}
