"use client";

import { useState } from "react";
import { IconMail, IconUpload, IconUser } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "Remote",
      email: "careers@techcorp.com",
      deadline: "2025-04-15",
      status: "Not Applied",
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "DesignHub",
      location: "New York, NY",
      email: "jobs@designhub.io",
      deadline: "2025-04-20",
      status: "Not Applied",
    },
    {
      id: 3,
      title: "Full Stack Developer Intern",
      company: "WebSolutions",
      location: "San Francisco, CA",
      email: "hiring@websolutions.com",
      deadline: "2025-04-25",
      status: "Not Applied",
    },
  ]);

  return (
    <>
      <div className="md:hidden mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your internship applications
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{internships.length}</div>
            <p className="text-xs text-muted-foreground">
              +0 from last upload
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Applications Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              0% application rate
            </p>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Application Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={0} className="h-2" />
            <p className="mt-2 text-xs text-muted-foreground">
              0 of {internships.length} applications sent
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold">Available Internships</h2>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 w-full sm:w-auto"
        >
          <IconUpload className="h-4 w-4" />
          Upload PDF
        </Button>
      </div>

      <div className="grid gap-4">
        {internships.map((internship) => (
          <Card key={internship.id}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <CardTitle>{internship.title}</CardTitle>
                  <CardDescription>{internship.company}</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {internship.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <IconMail className="h-4 w-4 text-muted-foreground" />
                  <span className="break-all">{internship.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IconUser className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.location}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <div className="text-sm text-muted-foreground">
                Deadline: {internship.deadline}
              </div>
              <Button className="w-full sm:w-auto">Apply</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
