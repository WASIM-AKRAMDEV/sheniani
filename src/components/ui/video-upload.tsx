"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { CloudUpload, Play, X } from "lucide-react"
import { useRef, useState } from "react"

interface VideoUploadProps {
  multiple?: boolean
  maxFiles?: number
  files: File[]
  onFilesChange: (files: File[]) => void
  placeholder?: string
  className?: string
}

export function VideoUpload({
  multiple = false,
  maxFiles = 1,
  files,
  onFilesChange,
  placeholder = "Upload videos",
  className,
}: VideoUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [previewVideo, setPreviewVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return

    const fileArray = Array.from(newFiles)
    const videoFiles = fileArray.filter((file) => file.type.startsWith("video/"))

    if (multiple) {
      const totalFiles = files.length + videoFiles.length
      if (totalFiles > maxFiles) {
        alert(`Maximum ${maxFiles} files allowed`)
        return
      }
      onFilesChange([...files, ...videoFiles])
    } else {
      if (videoFiles.length > 0) {
        onFilesChange([videoFiles[0]])
      }
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    onFilesChange(newFiles)
  }

  const openPreview = (file: File) => {
    const url = URL.createObjectURL(file)
    setPreviewVideo(url)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (previewVideo) {
      URL.revokeObjectURL(previewVideo)
      setPreviewVideo(null)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Upload Area */}
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          dragActive ? "border-theme-orange bg-orange-50" : "border-theme-gray",
          "hover:border-theme-orange hover:bg-orange-50/50",
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!multiple && files.length > 0 ? (
          <div className="relative">
            <video src={URL.createObjectURL(files[0])} className="mx-auto rounded-lg max-w-full max-h-48" controls />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => removeFile(0)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
             <CloudUpload className="size-12 text-gray-400 mx-auto" />
            <div>
              <p className="text-sm font-medium text-black">{placeholder}</p>
              <p className="text-xs mt-1 text-gray-500">
                Drag and drop files here, or{" "}
                <button
                  type="button"
                  className="text-theme-orange hover:underline"
                  onClick={() => inputRef.current?.click()}
                >
                  browse
                </button>
              </p>
              <p className="text-xs text-gray-400">
                {multiple ? `Max ${maxFiles} files` : "Single file only"} • MP4, MOV, AVI up to 50MB
              </p>
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept="video/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Multiple Files Preview */}
      {multiple && files.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((file, index) => (
            <div key={index} className="relative group border max-w-[300px] rounded-lg p-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="size-16 bg-smoke rounded-lg flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{file.name}</p>
                  <p className="text-[10px] text-gray-500">{formatFileSize(file.size)}</p>
                </div>
                <div className="flex space-x-2">
                  <Button type="button" variant="secondary" size="sm" onClick={() => openPreview(file)}>
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="destructive" size="sm" onClick={() => removeFile(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Video Preview</DialogTitle>
          </DialogHeader>
          {previewVideo && (
            <div className="flex justify-center">
              <video src={previewVideo} controls className="max-w-full max-h-[70vh] rounded-lg" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
