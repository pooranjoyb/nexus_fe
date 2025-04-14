import React, { useState, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Upload, FileSpreadsheetIcon } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { useUploadMutation } from "@/app/api/resume";

interface UploadResumeDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const UploadResumeDialog: React.FC<UploadResumeDialogProps> = ({
    isOpen,
    onClose,
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const uploadMutation = useUploadMutation();
    const { user } = useAuth();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0)
            setSelectedFile(e.target.files[0]);
    };

    const handleRemoveResume = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        onClose();
    };

    const onUpload = async () => {
        if (selectedFile) {
            console.log(selectedFile);
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
                        onClose();
                    },
                    onError: () => {
                        onClose();
                    },
                }
            );
        } else {
            console.error("No file selected for upload.");
            toast.error("Please select a file to upload.");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl w-full p-0 overflow-hidden [&>button]:hidden">
                <div className="max-h-[80vh] overflow-y-auto p-6">
                    <DialogHeader>
                        <DialogTitle className="text-center font-semibold my-3">
                            Upload Resume
                        </DialogTitle>
                    </DialogHeader>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full h-[300px] relative">
                        {selectedFile ? (
                            <div className="text-center flex justify-center h-full">
                                <div className="flex flex-col justify-center items-center text-gray-600">
                                    <FileSpreadsheetIcon />
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

                    <DialogFooter className="flex gap-3 w-full my-3">
                        <Button
                            onClick={handleRemoveResume}
                            variant={"outline"}
                            className="w-1/2"
                        >
                            Cancel
                        </Button>
                        <Button onClick={onUpload} variant={"success"} className="w-1/2">
                            Upload
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UploadResumeDialog;
