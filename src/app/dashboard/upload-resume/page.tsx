"use client";
import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

import { useUploadMutation } from "@/app/api/mutations/resume";
import { useAuth } from "@/hooks/useAuth";

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadMutation = useUploadMutation();
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0)
      setSelectedFile(e.target.files[0]);
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onUpload = async () => {
    if (selectedFile) {
      uploadMutation.mutate(
        {
          resume: selectedFile,
          userId: user?.user?._id ?? "",
        },
        {
          onSuccess: () => {
            setSelectedFile(null);
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          },
        }
      );
    } else {
      console.error("No file selected for upload.");
      toast.error("Please select a file to upload.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 text-transparent bg-clip-text animate-gradient drop-shadow-lg">
        Let Nexus decide what&apos;s best for you.
      </h1>
      <Label>Upload your resume here</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full h-[300px] relative">
        {selectedFile ? (
          <div className="text-center flex justify-center h-full">
            <div className="flex flex-col justify-center items-center text-gray-600">
              <p className="mt-2 text-sm">{selectedFile.name}</p>
            </div>
          </div>
        ) : (
          <div className="text-center flex justify-center h-full">
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-10 w-10 text-gray-500 mb-2" />
              <p className="mt-2 text-gray-500">
                Drop your documents here, or{" "}
                <span className="underline cursor-pointer">browse</span>
              </p>
              <p className="text-sm text-gray-400">Supports PDF files only</p>
            </div>
          </div>
        )}
        <Input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex gap-3 w-full">
        <Button
          onClick={handleRemoveImage}
          variant={"outline"}
          className="w-1/2"
        >
          Remove
        </Button>
        <Button
          onClick={onUpload}
          variant={"success"}
          className="w-1/2"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
