import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Quote } from "lucide-react"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"
import { Card, CardContent } from "@/components/ui/card"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 1,
      title: "Max Returns Home",
      type: "pet",
      description:
        "After being missing for 3 weeks, Max was spotted by a community member who uploaded his photo to FindKind. His family was notified within hours and they were reunited the same day.",
      image: "/happy-golden-hour-retriever.png",
      person: "Sarah & Max",
      location: "Portland, OR",
    },
    {
      id: 2,
      title: "Grandmother Found Safe",
      type: "person",
      description:
        "When Mrs. Wilson wandered away from her home due to dementia, her family was frantic. A good samaritan spotted her at a bus stop, recognized her from FindKind, and helped reconnect her with her worried family.",
      image: "/thoughtful-senior.png",
      person: "The Wilson Family",
      location: "Chicago, IL",
    },
    {
      id: 3,
      title: "Whiskers' Journey Home",
      type: "pet",
      description:
        "Whiskers escaped during a thunderstorm and was missing for over a month. Thanks to a poster upload by a community member, Whiskers was identified at a local shelter and returned to his overjoyed family.",
      image: "/tabby-nap.png",
      person: "The Martinez Family",
      location: "Austin, TX",
    },
    {
      id: 4,
      title: "Teenager Reunited with Family",
      type: "person",
      description:
        "After running away from home, 16-year-old Jamie was reported missing by her parents. A teacher recognized her from a FindKind alert and was able to help facilitate a safe reunion.",
      image: "/thoughtful-brunette.png",
      person: "The Parker Family",
      location: "Seattle, WA",
    },
  ]

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
              className="text-sm font-medium underline decoration-[#34d399] decoration-2 underline-offset-4 text-[#374151]"
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
            <MeshGradientBackground colors={["#a7f3d0", "#bfdbfe", "#ddd6fe", "#f9a8d4"]} speed={0.001} />
          </div>
          <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24">
            <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline text-[#6b7280]">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#34d399] to-[#10b981]">
                Success Stories
              </h1>
              <p className="text-lg text-[#6b7280]">
                Real stories of families and loved ones reunited through the FindKind community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                {successStories.map((story) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden border-[#f0f0f5] hover:shadow-md transition-all duration-300"
                  >
                    <div className="aspect-video relative">
                      <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{story.title}</h3>
                        <p className="text-white/80 text-sm">{story.location}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <Quote className="h-6 w-6 text-[#34d399] mr-2 flex-shrink-0 mt-1" />
                        <p className="text-[#6b7280] italic">{story.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-[#374151]">{story.person}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#34d399] text-[#34d399] hover:bg-[#d1fae5]/50"
                        >
                          Read Full Story
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#fcfcfd]">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">Community Impact</h2>
              <div className="grid gap-8 md:grid-cols-3 text-center">
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="text-3xl font-bold text-[#34d399] mb-2">500+</div>
                  <p className="text-[#6b7280]">Successful Reunions</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="text-3xl font-bold text-[#60a5fa] mb-2">10,000+</div>
                  <p className="text-[#6b7280]">Community Members</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <div className="text-3xl font-bold text-[#f87c96] mb-2">50+</div>
                  <p className="text-[#6b7280]">Cities Covered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">Featured Testimonial</h2>
              <div className="bg-[#fcfcfd] p-8 rounded-xl border border-[#f0f0f5] shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128&query=smiling woman"
                      width={128}
                      height={128}
                      alt="Testimonial"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Quote className="h-8 w-8 text-[#34d399] mb-4" />
                    <p className="text-[#6b7280] italic text-lg mb-4">
                      "I never thought I'd see my cat again after she went missing during our move. Thanks to FindKind
                      and a kind neighbor who spotted her, we were reunited after 3 months apart. I'm eternally grateful
                      for this amazing community."
                    </p>
                    <div>
                      <p className="font-medium text-[#374151]">Jennifer Rodriguez</p>
                      <p className="text-sm text-[#6b7280]">Miami, FL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#a7f3d0", "#bfdbfe", "#ddd6fe", "#f9a8d4"]} speed={0.002} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#34d399] to-[#10b981]">
                Share Your Success Story
              </h2>
              <p className="mb-8 text-[#6b7280]">
                Have you been reunited with a loved one through FindKind? We'd love to hear your story and share it with
                our community.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#34d399] to-[#10b981] hover:opacity-90">
                Submit Your Story
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
