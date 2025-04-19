import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Upload, MapPin, Search, CheckCircle } from "lucide-react"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export default function HowItWorksPage() {
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
              className="text-sm font-medium underline decoration-[#60a5fa] decoration-2 underline-offset-4 text-[#374151]"
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
            <MeshGradientBackground colors={["#bfdbfe", "#ddd6fe", "#f9a8d4", "#a7f3d0"]} speed={0.001} />
          </div>
          <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24">
            <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline text-[#6b7280]">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
                How FindKind Works
              </h1>
              <p className="text-lg text-[#6b7280]">
                Learn how our platform connects those who've lost someone with those who might have seen them.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">Three Ways to Help</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-[#fcfcfd] p-6 rounded-xl border border-[#f0f0f5] shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#fce7f3] flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#f87c96]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Report Missing</h3>
                  <p className="text-sm text-[#6b7280]">
                    For family and friends to report a missing person or pet with detailed information.
                  </p>
                </div>
                <div className="bg-[#fcfcfd] p-6 rounded-xl border border-[#f0f0f5] shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-[#60a5fa]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Upload Poster</h3>
                  <p className="text-sm text-[#6b7280]">
                    For good samaritans who saw a missing poster in public and want to amplify it.
                  </p>
                </div>
                <div className="bg-[#fcfcfd] p-6 rounded-xl border border-[#f0f0f5] shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d1fae5] flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-[#34d399]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#374151] mb-2">Report Sighting</h3>
                  <p className="text-sm text-[#6b7280]">
                    For people who spotted someone or a pet that might be lost or missing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#fcfcfd]">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">The Process</h2>
              <div className="space-y-12">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                      <h3 className="text-xl font-medium text-[#374151] mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-[#fce7f3] flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-[#f87c96] font-bold">1</span>
                        </span>
                        Submit Information
                      </h3>
                      <p className="text-[#6b7280] mb-4">
                        Whether you're reporting a missing loved one, uploading a poster, or reporting a sighting, start
                        by submitting detailed information through our easy-to-use forms.
                      </p>
                      <ul className="space-y-2 text-sm text-[#6b7280]">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Upload clear photos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Provide accurate location details</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Include distinguishing features</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-video rounded-xl overflow-hidden bg-[#f3f4f6]">
                      <Image
                        src="/focused-form-filler.png"
                        width={500}
                        height={300}
                        alt="Person submitting information"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <div className="aspect-video rounded-xl overflow-hidden bg-[#f3f4f6]">
                      <Image
                        src="/data-connections.png"
                        width={500}
                        height={300}
                        alt="System matching reports"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                      <h3 className="text-xl font-medium text-[#374151] mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-[#60a5fa] font-bold">2</span>
                        </span>
                        Matching & Alerts
                      </h3>
                      <p className="text-[#6b7280] mb-4">
                        Our system automatically compares new sightings with existing missing reports, looking for
                        potential matches based on location, description, and other details.
                      </p>
                      <ul className="space-y-2 text-sm text-[#6b7280]">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>AI-powered matching technology</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Real-time alerts to relevant parties</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Geographic proximity analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                      <h3 className="text-xl font-medium text-[#374151] mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-[#d1fae5] flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-[#34d399] font-bold">3</span>
                        </span>
                        Community Connection
                      </h3>
                      <p className="text-[#6b7280] mb-4">
                        When a potential match is found, we facilitate safe communication between the reporting party
                        and the family, while maintaining communication between the reporting party and the family,
                        while maintaining privacy and security for all involved.
                      </p>
                      <ul className="space-y-2 text-sm text-[#6b7280]">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Secure messaging system</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Verification process for all parties</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#34d399] mr-2 mt-0.5" />
                          <span>Support throughout the reunion process</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-video rounded-xl overflow-hidden bg-[#f3f4f6]">
                      <Image
                        src="/Airport-Welcome-Hug.png"
                        width={500}
                        height={300}
                        alt="People connecting"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">Search & Browse</h2>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#f3f4f6]">
                    <Image
                      src="/focused-online-search.png"
                      width={500}
                      height={300}
                      alt="Person searching"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-[#374151]">Find Missing Loved Ones</h3>
                    <p className="text-[#6b7280]">
                      Anyone can search our database of missing persons and pets. Filter by location, date, and other
                      criteria to find relevant listings.
                    </p>
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-[#60a5fa] mr-2" />
                      <span className="text-[#374151] font-medium">Advanced search options</span>
                    </div>
                    <p className="text-[#6b7280]">Our search functionality allows you to filter by:</p>
                    <ul className="space-y-2 text-sm text-[#6b7280] pl-6 list-disc">
                      <li>Location (city, state, country)</li>
                      <li>Date range</li>
                      <li>Type (person or pet)</li>
                      <li>Physical characteristics</li>
                    </ul>
                    <Button className="bg-gradient-to-r from-[#60a5fa] to-[#34d399] hover:opacity-90" asChild>
                      <Link href="/search">Search Listings</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#bfdbfe", "#ddd6fe", "#f9a8d4", "#a7f3d0"]} speed={0.002} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-[#6b7280]">
                Join our community today and help reunite missing loved ones with their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-[#60a5fa] to-[#34d399] hover:opacity-90" asChild>
                  <Link href="/report-missing">Report Missing</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#60a5fa] text-[#60a5fa] hover:bg-[#dbeafe]/50"
                  asChild
                >
                  <Link href="/search">Search Listings</Link>
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
