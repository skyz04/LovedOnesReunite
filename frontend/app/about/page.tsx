import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export default function AboutPage() {
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
            <Link
              href="/about"
              className="text-sm font-medium underline decoration-[#f87c96] decoration-2 underline-offset-4 text-[#374151]"
            >
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <MeshGradientBackground colors={["#f9a8d4", "#ddd6fe", "#bfdbfe", "#a7f3d0"]} speed={0.001} />
          </div>
          <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24">
            <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline text-[#6b7280]">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
                About FindKind
              </h1>
              <p className="text-lg text-[#6b7280]">
                A compassionate community dedicated to reuniting missing loved ones with their families.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/hands-of-unity.png" alt="People joining hands in unity" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#374151]">Our Mission</h2>
                <p className="text-[#6b7280]">
                  FindKind was created with a simple but powerful mission: to help reunite missing loved ones with their
                  families through the power of community.
                </p>
                <p className="text-[#6b7280]">
                  We believe that by connecting those who have lost someone with those who might have seen them, we can
                  create a network of compassionate individuals working together to bring families back together.
                </p>
                <p className="text-[#6b7280]">
                  Every report, poster, and sighting brings us one step closer to a successful reunion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#fcfcfd]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-6 text-center">Our Values</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#fce7f3] flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-[#f87c96]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Compassion</h3>
                  <p className="text-sm text-[#6b7280]">
                    We approach every case with empathy and understanding, recognizing the emotional toll of having a
                    missing loved one.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#dbeafe] flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#60a5fa]"
                    >
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                      <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A2.97 2.97 0 0 1 8.5 6" />
                      <path d="m8.5 6 .2-2.2c.44-.5 1.06-.8 1.8-.8 1.66 0 3 1.34 3 3h7c.55 0 1.05.22 1.41.59.39.37.59.87.59 1.41 0 1.1-.9 2-2 2h-4.5" />
                      <path d="M5.89 19.69A2 2 0 0 0 7.5 20a2 2 0 0 0 2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Community</h3>
                  <p className="text-sm text-[#6b7280]">
                    We believe in the power of community and collective action to achieve what individuals alone cannot.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#d1fae5] flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#34d399]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Trust</h3>
                  <p className="text-sm text-[#6b7280]">
                    We maintain the highest standards of privacy and security, ensuring that sensitive information is
                    handled with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-6 text-center">Our Team</h2>
              <p className="text-[#6b7280] text-center mb-8">
                FindKind was founded by a diverse group of individuals who share a common goal: to help reunite families
                and loved ones.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-[#f3f4f6]">
                    <Image
                      src="/diverse-group-city.png"
                      width={96}
                      height={96}
                      alt="Team member"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151]">Sarah Johnson</h3>
                  <p className="text-sm text-[#6b7280]">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-[#f3f4f6]">
                    <Image
                      src="/diverse-group-city.png"
                      width={96}
                      height={96}
                      alt="Team member"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151]">Michael Chen</h3>
                  <p className="text-sm text-[#6b7280]">CTO</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-[#f3f4f6]">
                    <Image
                      src="/diverse-group-city.png"
                      width={96}
                      height={96}
                      alt="Team member"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151]">Aisha Patel</h3>
                  <p className="text-sm text-[#6b7280]">Head of Community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#c4b5fd", "#93c5fd", "#a7f3d0", "#f9a8d4"]} speed={0.002} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#60a5fa]">
                Join Our Mission
              </h2>
              <p className="mb-8 text-[#6b7280]">
                Whether you've lost someone, seen a missing poster, or want to volunteer your time, there are many ways
                to get involved with FindKind.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#c084fc] to-[#60a5fa] hover:opacity-90">
                Get Started
              </Button>
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
