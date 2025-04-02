"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const grammarAnalysis = {
    section_scores: {
      bullet_points: 90,
      completeness: 85,
      industry_fit: 78,
      length: 88,
      quantifiable: 82,
      sentence_structure: 79,
      skills_format: 87,
    },
  };

  const CardData = [
    {
      title: "Total Resumes Uploaded",
      description: "Total resumes uploaded to the system",
      data: "120",
    },
    {
      title: "Pending Reviews",
      description: "Resumes waiting for evaluation",
      data: "25",
    },
    {
      title: "Accepted Resumes",
      description: "Successfully shortlisted resumes",
      data: "80",
    },
    {
      title: "Rejected Resumes",
      description: "Resumes that didn't meet criteria",
      data: "15",
    },
  ];

  const resumeChartData = [
    { month: "Jan", uploaded: 20, reviewed: 10, accepted: 6, rejected: 4 },
    { month: "Feb", uploaded: 30, reviewed: 25, accepted: 15, rejected: 10 },
    { month: "Mar", uploaded: 45, reviewed: 40, accepted: 30, rejected: 10 },
    { month: "Apr", uploaded: 35, reviewed: 30, accepted: 20, rejected: 10 },
    { month: "May", uploaded: 50, reviewed: 45, accepted: 35, rejected: 10 },
    { month: "Jun", uploaded: 60, reviewed: 55, accepted: 40, rejected: 15 },
  ];

  const resumeChartConfig = {
    uploaded: { label: "Uploaded", color: "#2563eb" },
    reviewed: { label: "Reviewed", color: "#10b981" },
    accepted: { label: "Accepted", color: "#fbbf24" },
    rejected: { label: "Rejected", color: "#ef4444" },
  } satisfies ChartConfig;

  return (
    <>
      <div className="text-2xl font-semibold">
        {greeting}, {user?.user?.username}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-4">
        {CardData.map((data) => (
          <Card className="w-full" key={data?.title}>
            <CardHeader>
              <CardTitle>{data?.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-4xl font-medium">
              {data?.data}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full flex gap-5">
        <Card className="w-3/5">
          <CardHeader>
            <CardTitle>Resume Analytics</CardTitle>
            <CardDescription>
              Track resume submissions and evaluations over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={resumeChartConfig}
              className="border bg-card rounded-xl p-2"
            >
              <BarChart accessibilityLayer data={resumeChartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  className="cursor-pointer"
                  dataKey="uploaded"
                  fill="#2563eb"
                  radius={4}
                />
                <Bar
                  className="cursor-pointer"
                  dataKey="reviewed"
                  fill="#10b981"
                  radius={4}
                />
                <Bar
                  className="cursor-pointer"
                  dataKey="accepted"
                  fill="#fbbf24"
                  radius={4}
                />
                <Bar
                  className="cursor-pointer"
                  dataKey="rejected"
                  fill="#ef4444"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Your Recent Resume Analysis Stats</CardTitle>
            <CardDescription>Check the recent analysis</CardDescription>

            {/* tab  */}
            <Tabs defaultValue="grammer">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger className="cursor-pointer" value="grammer">
                  Grammar Analysis
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="overall">
                  Overall Score
                </TabsTrigger>
              </TabsList>
              <TabsContent value="grammer">
                <Card>
                  <CardHeader>
                    <CardTitle>Grammar </CardTitle>
                    <CardDescription>
                      Review your grammar performance and recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Metric</TableHead>
                          <TableHead className="text-right">
                            Score (%)
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(grammarAnalysis.section_scores).map(
                          ([key, value]) => (
                            <TableRow key={key}>
                              <TableCell className="capitalize">
                                {key.replace("_", " ")}
                              </TableCell>
                              <TableCell className="text-right">
                                {value}%
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overall">
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Resume Score</CardTitle>
                    <CardDescription>
                      Check how well your resume is performing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-lg">
                      <strong>Overall Score:</strong> 85%
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
