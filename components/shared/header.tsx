"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { ShieldCheck } from "lucide-react"
import { signIn, signOut, useSession } from "@/lib/auth-client"

export function Header() {
  const { data: session, isPending } = useSession()

  const handleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard"
    })
  }

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          // Redirect to home after sign out
          window.location.href = "/"
        }
      }
    })
  }

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span>BetterAuthFlow</span>
        </Link>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          
          {isPending ? (
            // Show loading state while checking session
            <div className="text-muted-foreground">Loading...</div>
          ) : session ? (
            // User is signed in
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="text-foreground hover:text-primary"
              >
                Sign Out
              </Button>
            </>
          ) : (
            // User is not signed in
            <Button 
              onClick={handleSignIn}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Sign in with Google
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}