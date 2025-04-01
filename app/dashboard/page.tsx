"use client";

import { useState } from "react";
import {
  IconChartBar,
  IconHome,
  IconLogout,
  IconMail,
  IconMenu2,
  IconSettings,
  IconUpload,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase-client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Upload Files",
      href: "/dashboard/upload",
      icon: (
        <IconUpload className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Applications",
      href: "/dashboard/applications",
      icon: (
        <IconMail className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Mobile Menu Button and Overlay */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <IconMenu2
              className="h-6 w-6 text-neutral-800 dark:text-neutral-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2">
                <IconSettings className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>{" "}
              <DropdownMenuItem
                className="text-destructive flex items-center gap-2"
                onClick={handleLogout}
              >
                <IconLogout className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-neutral-900 z-50 p-5 flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <Logo />
                  <IconX
                    className="h-6 w-6 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="flex items-center gap-3 py-3 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon}
                      <span className="text-neutral-700 dark:text-neutral-200">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <Link
                    href="#"
                    className="flex items-center gap-3 py-3 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <Avatar className="h-7 w-7 shrink-0">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <header className="hidden md:block border-b bg-background sticky top-0 z-10">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <div>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <IconSettings className="h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-destructive flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <IconLogout className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="flex-1 w-full overflow-y-auto p-4 sm:p-6">
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
        </main>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Applai
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </Link>
  );
};
