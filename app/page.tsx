"use client"

import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth-client"

export default function HomePage() {
  const handleGetStarted = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard"
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <section className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
              Explore a Better Way to Authenticate
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              This project is a hands-on exploration of Better Auth, a modern and comprehensive authentication solution for the TypeScript ecosystem. Secure, scalable, and developer-friendly.
            </p>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              Start for Free →
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}