import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Resume } from "@/app/types/resume";

import { useRouter } from "next/navigation";
import { useAnalyseResumeMutation } from "@/app/api/resume";
import { useAuth } from "@/hooks/useAuth";

interface AnalyseResumeDialogProps {
  resume?: Resume | null;
  isOpen: boolean;
  onClose: () => void;
}

const AnalyseResumeDialog: React.FC<AnalyseResumeDialogProps> = ({
  resume,
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const { user } = useAuth();
  const analyseResumeMutation = useAnalyseResumeMutation();
  const [jobDescription, setJobDescription] = useState<string>("");

  const handleAnalyseResume = async () => {
    if (!resume?.resume_id) return;

    analyseResumeMutation.mutate(
      {
        resume_id: resume?.resume_id,
        user_id: String(user?.user?._id),
        job_description: jobDescription,
      },
      {
        onSuccess: () => {
          router.push(`/dashboard/analyse-resume/${resume?.resume_id}`);
          setJobDescription("");
          onClose();
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full p-0 overflow-hidden [&>button]:hidden">
        <div className="max-h-[80vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-center font-semibold">
              Analyse Resume
            </DialogTitle>
          </DialogHeader>
          {resume ? (
            <div className="my-4">
              You are about to use Nexus divine powers to analyse{" "}
              <strong className="text-green-600">
                {resume?.file_name ?? "Unknown File Name"}
              </strong>
            </div>
          ) : (
            <div className="my-4">Please select a resume to analyse.</div>
          )}
          <Label className="py-2 text-md">Enter Job Description : </Label>

          <Textarea
            onChange={(e) => setJobDescription(e.target.value)}
            className="h-60"
          />

          <DialogFooter className="flex justify-end space-x-2 mt-5">
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  setJobDescription("");
                  onClose();
                }}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={handleAnalyseResume}
              disabled={analyseResumeMutation?.isPending}
            >
              Analyse
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalyseResumeDialog;
