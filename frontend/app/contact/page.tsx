import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Heart, Mail, Phone, MapPin } from "lucide-react"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export default function ContactPage() {
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
            <Link
              href="/contact"
              className="text-sm font-medium underline decoration-[#c084fc] decoration-2 underline-offset-4 text-[#374151]"
            >
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
            <MeshGradientBackground colors={["#f9a8d4", "#c4b5fd", "#93c5fd", "#a7f3d0"]} speed={0.001} />
          </div>
          <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24">
            <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline text-[#6b7280]">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#f87c96]">
                Contact Us
              </h1>
              <p className="text-lg text-[#6b7280]">
                Have questions, feedback, or need assistance? We're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-[#374151] mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#fce7f3] flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-[#f87c96]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#374151] mb-1">Email Us</h3>
                        <p className="text-[#6b7280] mb-1">For general inquiries:</p>
                        <a href="mailto:info@findkind.org" className="text-[#c084fc] hover:underline">
                          info@findkind.org
                        </a>
                        <p className="text-[#6b7280] mt-2 mb-1">For support:</p>
                        <a href="mailto:support@findkind.org" className="text-[#c084fc] hover:underline">
                          support@findkind.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#dbeafe] flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-[#60a5fa]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#374151] mb-1">Call Us</h3>
                        <p className="text-[#6b7280] mb-1">Monday to Friday, 9am - 5pm EST</p>
                        <a href="tel:+18005551234" className="text-[#c084fc] hover:underline">
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#d1fae5] flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#34d399]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#374151] mb-1">Visit Us</h3>
                        <p className="text-[#6b7280]">
                          123 Compassion Way
                          <br />
                          Suite 456
                          <br />
                          Portland, OR 97201
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-[#374151] mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-[#e5e7eb]"
                      >
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
                          className="h-5 w-5 text-[#6b7280]"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-[#e5e7eb]"
                      >
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
                          className="h-5 w-5 text-[#6b7280]"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-[#e5e7eb]"
                      >
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
                          className="h-5 w-5 text-[#6b7280]"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#fcfcfd] p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <h2 className="text-2xl font-bold text-[#374151] mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Reason for Contact</Label>
                      <RadioGroup defaultValue="general">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support">Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partnership" id="partnership" />
                          <Label htmlFor="partnership">Partnership</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={5}
                        className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#c084fc] to-[#f87c96] hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#fcfcfd]">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#374151] mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <h3 className="text-lg font-medium text-[#374151] mb-2">How quickly will I receive a response?</h3>
                  <p className="text-[#6b7280]">
                    We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters
                    related to missing persons, please call our support line directly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <h3 className="text-lg font-medium text-[#374151] mb-2">
                    I'm having trouble with the website. Who can help?
                  </h3>
                  <p className="text-[#6b7280]">
                    For technical support, please email support@findkind.org with details about the issue you're
                    experiencing, including any error messages and the device/browser you're using.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#f0f0f5] shadow-sm">
                  <h3 className="text-lg font-medium text-[#374151] mb-2">How can I volunteer with FindKind?</h3>
                  <p className="text-[#6b7280]">
                    We're always looking for passionate volunteers! Please use the contact form above and select
                    "Partnership" as your reason for contact. Our volunteer coordinator will reach out with
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MeshGradientBackground colors={["#f9a8d4", "#c4b5fd", "#93c5fd", "#a7f3d0"]} speed={0.002} />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#f87c96]">
                We're Here to Help
              </h2>
              <p className="mb-8 text-[#6b7280]">
                No matter your question or concern, our team is dedicated to providing compassionate support and
                assistance.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#c084fc] to-[#f87c96] hover:opacity-90">
                Get Started Today
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
