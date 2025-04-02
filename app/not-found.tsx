import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-lg text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
