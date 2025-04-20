import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <MeshGradientBackground colors={["#f9a8d4", "#ddd6fe", "#bfdbfe", "#a7f3d0"]} />
      </div>
      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
                Help reunite missing loved ones with their families
              </h1>
              <p className="max-w-[600px] text-[#6b7280] md:text-xl">
                FindKind connects those who've lost someone with those who might have seen them. Every report, poster,
                and sighting brings families closer to reunion.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f87c96] to-[#c084fc] hover:opacity-90 shadow-lg shadow-pink-500/20"
                asChild
              >
                <Link href="/report-missing">Report Missing</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#c084fc] text-[#c084fc] hover:bg-[#f5f3ff]"
                asChild
              >
                <Link href="/search">
                  <Search className="mr-2 h-4 w-4" />
                  Search Listings
                </Link>
              </Button>
            </div>
            <p className="text-sm text-[#6b7280]">
              Already reported?{" "}
              <Link href="/login" className="text-[#c084fc] underline underline-offset-2">
                Sign in
              </Link>{" "}
              to check for updates.
            </p>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9a8d4]/20 to-[#c4b5fd]/20 mix-blend-overlay rounded-xl"></div>
            <Image
              src="/hands-of-unity.png"
              width={600}
              height={600}
              alt="Community of people helping find missing loved ones"
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
