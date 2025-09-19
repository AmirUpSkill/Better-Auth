import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { ShieldCheck } from "lucide-react" // Icon for app name

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background border-border"> {/* Explicit bg/border for theme */}
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-7 w-7 text-primary" /> {/* Orange accent icon */}
          <span>BetterAuthFlow</span>
        </Link>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <Link href="/sign-in">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}