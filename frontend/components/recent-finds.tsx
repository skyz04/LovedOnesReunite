import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, PawPrint, User } from "lucide-react"

export function RecentFinds() {
  const recentFinds = [
    {
      id: 1,
      name: "Max",
      type: "pet",
      status: "found",
      location: "Central Park, New York",
      date: "2 days ago",
      image: "/happy-golden-hour-retriever.png",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      type: "person",
      status: "missing",
      location: "Downtown Seattle",
      date: "3 days ago",
      image: "/thoughtful-brunette.png",
    },
    {
      id: 3,
      name: "Whiskers",
      type: "pet",
      status: "missing",
      location: "Riverdale, Chicago",
      date: "1 day ago",
      image: "/tabby-nap.png",
    },
    {
      id: 4,
      name: "James Wilson",
      type: "person",
      status: "found",
      location: "Mission District, San Francisco",
      date: "5 days ago",
      image: "/thoughtful-senior.png",
    },
  ]

  return (
    <section className="container px-4 py-12 md:px-6 md:py-16 bg-[#fcfcfd]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
              Recent Listings
            </h2>
            <p className="mt-2 text-[#6b7280]">The latest missing and found reports from our community</p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-[#60a5fa] text-[#60a5fa] hover:bg-[#dbeafe]/50"
            asChild
          >
            <Link href="/search">View All Listings</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentFinds.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-white/80 backdrop-blur-sm border-[#f0f0f5] hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <Badge
                  className={`absolute top-2 right-2 ${
                    item.status === "found"
                      ? "bg-gradient-to-r from-[#34d399] to-[#10b981] border-none"
                      : "bg-gradient-to-r from-[#f87c96] to-[#ec4899] border-none"
                  }`}
                >
                  {item.status === "found" ? "Found" : "Missing"}
                </Badge>
                <div className="absolute top-2 left-2">
                  {item.type === "pet" ? (
                    <div className="bg-[#fef3c7] p-1 rounded-full">
                      <PawPrint className="h-5 w-5 text-[#f59e0b]" />
                    </div>
                  ) : (
                    <div className="bg-[#dbeafe] p-1 rounded-full">
                      <User className="h-5 w-5 text-[#60a5fa]" />
                    </div>
                  )}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#374151]">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center text-sm text-[#6b7280] mb-1">
                  <MapPin className="mr-1 h-4 w-4" />
                  {item.location}
                </div>
                <div className="flex items-center text-sm text-[#6b7280]">
                  <Calendar className="mr-1 h-4 w-4" />
                  {item.date}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#c084fc] text-[#c084fc] hover:bg-[#f5f3ff]"
                  asChild
                >
                  <Link href={`/listing/${item.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
