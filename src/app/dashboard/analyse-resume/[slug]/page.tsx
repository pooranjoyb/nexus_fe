"use client";

import { JSX, use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CircularProgressColorDemo from "@/components/ui/circle-progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  ArrowUp,
  CircleAlert,
  Code2Icon,
  ShoppingBagIcon,
  Zap,
  CheckCircle2,
  Text,
  CheckCircle,
  List,
  Puzzle,
  Briefcase,
  Hash,
  Ruler,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { useFetchResumeDataQuery } from "@/app/api/resume";

interface AnalysedResumePageProps {
  params: Promise<{ slug: string }>;
}

export default function AnalysedResumePage({
  params,
}: Readonly<AnalysedResumePageProps>) {
  const resolvedParams = use(params);
  const resumeId = resolvedParams.slug;

  const {
    data: analysisData,
    isLoading,
    isError,
    error,
  } = useFetchResumeDataQuery(resumeId);

  if (isLoading) {
    return <div>Loading analysis data...</div>;
  }

  if (isError || !analysisData) {
    return (
      <div>
        Error: {error?.message ?? "Failed to load analysis data."}
      </div>
    );
  }

  const CardData = [
    {
      title: "Overall Score",
      description: "Needs Significant Revision",
      data: analysisData?.overall_score,
      progressColor: "stroke-indigo-500",
      cardFooterLeft: "Last Scan",
      cardFooterRight: "XXXXXXXXX",
    },
    {
      title: "Technical Score",
      description: {
        return: () => (
          <div className="flex gap-3">
            <Badge variant={"secondary"} className="text-red-500 bg-red-100">
              <ArrowDown />
              5%
            </Badge>
            <span>
              {analysisData?.technical_score?.required_skill_match_percentage}%
              skill match
            </span>
          </div>
        ),
      },
      data: {
        return: () => <>{75.34}</>,
      },
      progressColor: "stroke-violet-500",
      cardFooterLeft: "Target Job",
      cardFooterRight: "XXXXXXXXX",
    },
    {
      title: "Grammar Score",
      description: {
        return: () => (
          <div className="flex gap-3">
            <Badge
              variant={"secondary"}
              className="text-green-700 bg-green-100"
            >
              <ArrowUp />
              5%
            </Badge>
            <span>Grammar and Structure</span>
          </div>
        ),
      },
      data: {
        return: () => <>{analysisData?.grammar_analysis?.score}</>,
      },
      progressColor: "stroke-green-500",
      cardFooterLeft: "Action Needed",
      cardFooterRight: `${analysisData?.grammar_analysis?.recommendations?.length} recommendations`,
    },
  ];

  const technicalData = [
    {
      icon: {
        return: () => (
          <Code2Icon className="bg-blue-50 text-blue-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Skills Match",
      description: "Required skills for Data Scientist",
      score: analysisData?.technical_score?.required_skill_match_percentage,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-red-500 bg-red-100">
            - 5%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <ShoppingBagIcon className="bg-violet-50 text-violet-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Experience Match",
      description: "Relevance to Job Description",
      score: analysisData?.technical_score?.required_skill_match_percentage,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-red-500 bg-red-100">
            - 5%
          </Badge>
        ),
      },
    },
  ];

  const grammarData = [
    {
      icon: {
        return: () => (
          <Zap className="bg-red-50 text-red-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Action Verbs",
      description: "Strength of action verbs",
      score:
        analysisData?.grammar_analysis?.section_scores?.action_verbs?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-red-500 bg-red-100">
            - 5%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <CheckCircle className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Active Voice",
      description: "Use of active voice",
      score:
        analysisData?.grammar_analysis?.section_scores?.active_voice?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-green-500 bg-green-100">
            + 0%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <List className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Bullet Points",
      description: "Formatting of bullet points",
      score:
        analysisData?.grammar_analysis?.section_scores?.bullet_points?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-green-500 bg-green-100">
            + 0%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <Puzzle className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Completeness",
      description: "Essential resume sections",
      score:
        analysisData?.grammar_analysis?.section_scores?.completeness?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-green-500 bg-green-100">
            + 0%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <Briefcase className="bg-orange-50 text-orange-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Industry Fit",
      description: "Relevance to the target industry",
      score:
        analysisData?.grammar_analysis?.section_scores?.industry_fit?.score,
      score_needed: {
        return: () => (
          <Badge
            variant={"secondary"}
            className="text-orange-500 bg-orange-100"
          >
            + 15%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <Ruler className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Length",
      description: "Optimal resume length",
      score: analysisData?.grammar_analysis?.section_scores?.length?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-green-500 bg-green-100">
            + 0%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <Hash className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Quantifiable",
      description: "Use of quantifiable results",
      score:
        analysisData?.grammar_analysis?.section_scores?.quantifiable?.score,
      score_needed: {
        return: () => (
          <Badge variant={"secondary"} className="text-green-500 bg-green-100">
            + 0%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <Text className="bg-yellow-50 text-yellow-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Sentence Structure",
      description: "Clarity and conciseness of sentences",
      score:
        analysisData?.grammar_analysis?.section_scores?.sentence_structure
          ?.score,
      score_needed: {
        return: () => (
          <Badge
            variant={"secondary"}
            className="text-yellow-500 bg-yellow-100"
          >
            + 10%
          </Badge>
        ),
      },
    },
    {
      icon: {
        return: () => (
          <List className="bg-orange-50 text-orange-600 rounded-xl p-2 h-10 w-10" />
        ),
      },
      title: "Skills Format",
      description: "Formatting of the skills section",
      score:
        analysisData?.grammar_analysis?.section_scores?.skills_format?.score,
      score_needed: {
        return: () => (
          <Badge
            variant={"secondary"}
            className="text-orange-500 bg-orange-100"
          >
            + 15%
          </Badge>
        ),
      },
    },
  ];

  console.log(analysisData);

  return (
    <div className="">
      <div className="text-xl font-bold mb-5">
        Resume Analysis for Resume ID: {resumeId}
      </div>
      <div className="flex gap-5 my-4">
        {CardData.map((cardData) => (
          <Card className="w-full" key={cardData?.title}>
            <div className="w-full flex flex-row">
              <CardHeader className="w-full flex flex-col">
                <CardTitle className="text-muted-foreground">
                  {cardData?.title}
                </CardTitle>
                <CardTitle>
                  <span className="text-3xl">
                    {analysisData?.overall_score}
                  </span>
                  <span>/100</span>
                </CardTitle>
                <CardDescription>
                  {typeof cardData?.description === "string"
                    ? cardData?.description
                    : typeof cardData?.description === "object" &&
                      cardData?.description !== null &&
                      typeof (
                        cardData?.description as { return: () => JSX.Element }
                      ).return === "function"
                    ? (
                        cardData?.description as { return: () => JSX.Element }
                      ).return()
                    : null}
                </CardDescription>
              </CardHeader>

              <CircularProgressColorDemo
                value={analysisData?.overall_score ?? 0}
                size={120}
                strokeWidth={10}
                showLabel
                labelClassName="text-md font-bold"
                renderLabel={(progress) => `${progress}%`}
                className={`stroke-indigo-500/10`}
                progressClassName={`${cardData?.progressColor}`}
              />
            </div>
            <hr className="border-b-slate-500 mx-6" />
            <div className="flex text-xs justify-between text-slate-500">
              <div className="px-6">{cardData?.cardFooterLeft}</div>
              <div className="px-6">{cardData?.cardFooterRight}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex w-full gap-4">
        <Card className="w-1/2">
          <CardHeader className="flex w-full justify-between">
            <CardTitle>Technical Breakdown</CardTitle>
            <CardTitle className="flex gap-2">
              <Badge
                variant={"secondary"}
                className="bg-green-100 text-green-700"
              >
                3/9 skills
              </Badge>
              <Badge className="bg-blue-100 text-blue-700">
                {analysisData?.technical_score?.required_skill_match_percentage}
                % skills
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            {technicalData.map((data, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex gap-2">
                  {typeof data?.icon === "string"
                    ? data?.icon
                    : typeof data?.icon === "object" &&
                      data?.icon !== null &&
                      typeof (data?.icon as { return: () => JSX.Element })
                        .return === "function"
                    ? (data?.icon as { return: () => JSX.Element }).return()
                    : null}
                  <div className="flex flex-col">
                    <span>{data?.title}</span>
                    <span className="text-slate-500 text-xs ">
                      {data?.description}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">{data?.score}%</span>
                  <span>
                    {typeof data?.score_needed === "string"
                      ? data?.score_needed
                      : typeof data?.score_needed === "object" &&
                        data?.score_needed !== null &&
                        typeof (
                          data?.score_needed as { return: () => JSX.Element }
                        ).return === "function"
                      ? (
                          data?.score_needed as { return: () => JSX.Element }
                        ).return()
                      : null}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>

          <CardContent className="flex flex-col gap-3">
            <CardTitle className="text- font-normal">Skill Analysis</CardTitle>

            <div className="flex justify-between">
              <CardDescription>
                Matched Skills (
                {analysisData?.technical_score?.required_skills_found_count})
              </CardDescription>
              <CardDescription>
                Missing Skills (
                {analysisData?.technical_score?.required_skills_missing.length})
              </CardDescription>
            </div>
            <Progress
              className="[&>div]:bg-gradient-r from-red-500 to-green-500"
              value={
                analysisData?.technical_score?.required_skill_match_percentage
              }
            />

            <div className="flex flex-wrap gap-2 mt-3">
              {analysisData?.technical_score?.required_skills_found.map(
                (skill, idx) => (
                  <Badge className="p-1 bg-green-100 text-green-600" key={idx}>
                    <CheckCircle2 color="#3e9392" />
                    <span>{skill}</span>
                  </Badge>
                )
              )}
              {analysisData?.technical_score?.required_skills_missing.map(
                (skill, idx) => (
                  <Badge className="p-1 bg-red-100 text-red-600" key={idx}>
                    <CheckCircle2 color="#e7000b" />
                    <span>{skill}</span>
                  </Badge>
                )
              )}
            </div>

            <CardTitle className="text- font-normal mt-3">
              Justifications
            </CardTitle>

            <div className="flex gap-2">
              <CheckCircle className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
              <span className="w-full">
                {
                  analysisData?.technical_score?.justification
                    ?.experience_and_projects
                }
              </span>
            </div>
            {/* <div className="flex gap-2">
              <CheckCircle className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
              <span className="w-full">
                {
                  analysisData?.technical_score?.justification
                    .skills
                }
              </span>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="bg-green-50 text-green-600 rounded-xl p-2 h-10 w-10" />
              <span className="w-full">
                {
                  analysisData?.technical_score?.justification
                    .overall
                }
              </span>
            </div> */}

            <CardTitle className="text- font-normal mt-3">
              Job desctiption Responsibilities
            </CardTitle>
            <CardDescription>
              {analysisData?.technical_score?.job_description_responsibilities}
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-1/2">
          <CardHeader className="flex justify-between">
            <CardTitle>Grammar Breakdown</CardTitle>
            <div className="flex gap-3">
              <Badge className="bg-green-100 text-green-600">
                {analysisData?.grammar_analysis?.score}/100
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-600">
                Needs Work
              </Badge>
            </div>
          </CardHeader>

          <div className="flex flex-col gap-3 px-6">
            {grammarData?.map((data, idx) => (
              <div key={idx} className="flex justify-between">
                <div className="flex gap-2">
                  {typeof data?.icon === "string"
                    ? data?.icon
                    : typeof data?.icon === "object" &&
                      data?.icon !== null &&
                      typeof (data?.icon as { return: () => JSX.Element })
                        .return === "function"
                    ? (data?.icon as { return: () => JSX.Element }).return()
                    : null}

                  <div className="flex flex-col gap-1">
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>{data?.description}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-bold">{data?.score}%</span>
                  {typeof data?.score_needed === "string"
                    ? data?.score_needed
                    : typeof data?.score_needed === "object" &&
                      data?.score_needed !== null &&
                      typeof (
                        data?.score_needed as { return: () => JSX.Element }
                      ).return === "function"
                    ? (
                        data?.score_needed as { return: () => JSX.Element }
                      ).return()
                    : null}
                </div>
              </div>
            ))}
          </div>

          <CardContent>
            <CardDescription>Top Recommendations</CardDescription>

            <div className="my-3 flex flex-col gap-2">
              {analysisData?.grammar_analysis?.recommendations.map(
                (recommendations, idx) => (
                  <div className="flex gap-2" key={idx}>
                    <CircleAlert className=" text-red-600 bg-red-50 rounded-full h-6 w-6" />
                    <div className="w-full"> {recommendations}</div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
