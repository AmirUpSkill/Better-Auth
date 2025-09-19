
import { auth } from "@/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  // Server-side session check
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Hello, World! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {session.user.name || 'User'}!
          </p>
        </div>

        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">User Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-muted-foreground">Name:</span>
              <span className="font-semibold">{session.user.name || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-muted-foreground">Email:</span>
              <span>{session.user.email}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}