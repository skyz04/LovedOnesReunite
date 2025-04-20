import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Upload, Heart, User } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { RecentFinds } from "@/components/recent-finds"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <header className="relative z-10 border-b border-[#f0f0f5]">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#f87c96]" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
              FindKind
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-[#6b7280]">
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#6b7280]"
            >
              How It Works
            </Link>
            <Link
              href="/success-stories"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#6b7280]"
            >
              Success Stories
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4 text-[#6b7280]">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex border-[#e5e7eb] text-[#6b7280]">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-[#f87c96] to-[#c084fc] hover:opacity-90">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container relative px-4 py-12 md:px-6 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#f9a8d4", "#c4b5fd", "#93c5fd", "#a7f3d0"]} />
          </div>
          <div className="mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
                How can you help?
              </h2>
              <p className="mt-4 text-[#6b7280] max-w-3xl mx-auto">
                Whether you've lost someone, seen a missing poster, or spotted someone who might be lost, your
                contribution can make a difference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="transition-all hover:shadow-md bg-white/80 backdrop-blur-sm border-[#f0f0f5]">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#fce7f3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                    <User className="h-7 w-7 text-[#f87c96]" />
                  </div>
                  <CardTitle className="text-[#374151]">Report a Missing Loved One</CardTitle>
                  <CardDescription className="text-[#6b7280]">
                    For family and friends to report a missing person or pet
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-[#6b7280]">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Upload multiple photos</li>
                    <li>Provide last seen location</li>
                    <li>Share important details</li>
                    <li>Get a shareable link</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-[#f87c96] to-[#f87c96]/80 hover:opacity-90" asChild>
                    <Link href="/report-missing">Report Missing</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="transition-all hover:shadow-md bg-white/80 backdrop-blur-sm border-[#f0f0f5]">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#dbeafe] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                    <Upload className="h-7 w-7 text-[#60a5fa]" />
                  </div>
                  <CardTitle className="text-[#374151]">Upload a Poster</CardTitle>
                  <CardDescription className="text-[#6b7280]">
                    For good samaritans who saw a missing poster in public
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-[#6b7280]">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Upload poster image</li>
                    <li>Mark location where seen</li>
                    <li>Add date spotted</li>
                    <li>Include additional notes</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-white text-[#60a5fa] border-[#60a5fa] hover:bg-[#dbeafe]/50"
                    variant="outline"
                    asChild
                  >
                    <Link href="/upload-poster">Upload Poster</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="transition-all hover:shadow-md bg-white/80 backdrop-blur-sm border-[#f0f0f5]">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#d1fae5] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                    <MapPin className="h-7 w-7 text-[#34d399]" />
                  </div>
                  <CardTitle className="text-[#374151]">Report a Sighting</CardTitle>
                  <CardDescription className="text-[#6b7280]">
                    For people who spotted someone or a pet that might be lost
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-[#6b7280]">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Upload photo (if safe)</li>
                    <li>Mark exact location</li>
                    <li>Describe behavior</li>
                    <li>Add interaction details</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-white text-[#34d399] border-[#34d399] hover:bg-[#d1fae5]/50"
                    variant="outline"
                    asChild
                  >
                    <Link href="/report-sighting">Report Sighting</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <RecentFinds />

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#c4b5fd", "#93c5fd", "#a7f3d0", "#f9a8d4"]} speed={0.002} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#60a5fa]">
                Join our community of helpers
              </h2>
              <p className="mb-8 text-[#6b7280]">
                Sign up to receive alerts about missing loved ones in your area. Your eyes could be the difference in
                reuniting a family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 bg-gradient-to-r from-[#c084fc] to-[#60a5fa] hover:opacity-90">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-[#c084fc] text-[#c084fc] hover:bg-[#f5f3ff]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#f0f0f5] py-6 md:py-8 bg-[#fcfcfd]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-[#f87c96]" />
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
                  FindKind
                </span>
              </div>
              <p className="text-sm text-[#6b7280]">
                Helping reunite missing loved ones with their families through community support.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#374151]">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/how-it-works" className="text-[#6b7280] hover:text-[#374151]">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="text-[#6b7280] hover:text-[#374151]">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="text-[#6b7280] hover:text-[#374151]">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#6b7280] hover:text-[#374151]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#374151]">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-[#6b7280] hover:text-[#374151]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#6b7280] hover:text-[#374151]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-[#6b7280] hover:text-[#374151]">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-[#374151]">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-[#6b7280] hover:text-[#374151]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-[#6b7280] hover:text-[#374151]">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-[#6b7280] hover:text-[#374151]">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#f0f0f5] pt-6 text-center text-sm text-[#6b7280]">
            <p>© {new Date().getFullYear()} FindKind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
