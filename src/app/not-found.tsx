import { Home } from "lucide-react"
import Link from "next/link"


export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary text-white">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <h2 className="mb-2 text-xl font-semibold">Page Not Found</h2>
        <p className="mb-4 ">
          Sorry, I couldn't find the page you're looking for.
        </p>
          <Link href="/" className="flex flex-row gap-2 items-center justify-center text-white hover:text-white/60 duration-300">
              <Home className="h-4 w-4" />
              Home
          </Link>
      </div>
    </div>
  )
}