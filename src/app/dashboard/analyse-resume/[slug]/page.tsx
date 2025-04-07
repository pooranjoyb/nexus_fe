"use client"

import { use } from 'react';

interface AnalysedResumePageProps {
  params: Promise<{ slug: string }>;
}

export default function AnalysedResumePage({ params }: AnalysedResumePageProps) {

  const resolvedParams = use(params);
  const resumeId = resolvedParams.slug;

  return (
    <div>
      <p>Resume ID: {resumeId}</p>
    </div>
  );
}