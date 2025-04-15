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
import { Badge } from "@/components/ui/badge";
import { jobDescriptionRef } from "@/helpers/reference_data";
import Spinner from "./Spinner";

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
      <DialogContent className="w-full max-w-7xl p-0 overflow-hidden [&>button]:hidden">
        <div className="max-h-[80vh] p-6">

          <DialogHeader>
            <DialogTitle className="text-center font-semibold pb-3">
              Analyse Resume
            </DialogTitle>
          </DialogHeader>
          {resume ? (
            <div className="mt-2 mb-1">
              Analyse <strong className="text-green-600">
                {resume?.file_name ?? "Unknown File Name"}
              </strong> with Nexus divine powers
            </div>
          ) : (
            <div className="my-4">Please select a resume to analyse.</div>
          )}

          <Label className=" text-normal text-sm">Use Nexus flavoured job descriptions </Label>

          <div className="mt-2 mb-3 flex gap-2 flex-wrap">
            {
              jobDescriptionRef?.map((data, idx) => {
                const isActive: boolean = data?.description === jobDescription;
                return (
                  <Badge onClick={() => setJobDescription(data?.description)} key={data?.jobType ?? idx} variant={"secondary"} className={`
                    cursor-pointer
                    transition-colors duration-150 ease-in-out
                    ${isActive
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }
                  `}>
                    {data?.jobType}
                  </Badge>
                );
              }
              )}
          </div>

          <Textarea
            placeholder="Enter Job Description"
            value={jobDescription}
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
              {
                analyseResumeMutation?.isPending ? (
                  <>
                    <Spinner /> {"Analysing..."}
                  </>
                ) :
                  (
                    <>
                      {"Analyse"}
                    </>
                  )
              }
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog >
  );
};

export default AnalyseResumeDialog;
