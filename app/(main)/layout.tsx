import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export default function MainLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-2xl font-bold">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span>Dashboard</span>
          </Link>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}