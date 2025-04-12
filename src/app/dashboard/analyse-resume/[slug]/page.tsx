"use client";
import { use } from "react";
import { useFetchResumeDataQuery } from "@/app/api/resume";

interface AnalysedResumePageProps {
  params: Promise<{ slug: string }>;
}

export default function AnalysedResumePage({
  params,
}: Readonly<AnalysedResumePageProps>) {
  const resolvedParams = use(params);
  const resumeId = resolvedParams.slug;

  const { data: analysisData, isLoading } = useFetchResumeDataQuery(resumeId);

  if (isLoading || !analysisData) {
    return <div>Loading analysis data...</div>;
  }

  console.log(analysisData);

  return <div>{/* Your UI components using analysisData */}</div>;
}
