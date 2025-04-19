import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, User, ArrowLeft, Calendar, MapPin, AlertCircle } from "lucide-react"
import { PhotoUploader } from "@/components/photo-uploader"
import { LocationPicker } from "@/components/location-picker"
import { DatePicker } from "@/components/date-picker"
import { MeshGradientBackground } from "@/components/mesh-gradient-background"

export default function ReportMissingPage() {
  return (
    <div className="relative min-h-screen bg-[#fcfcfd]">
      <div className="absolute inset-0 opacity-20">
        <MeshGradientBackground colors={["#f9a8d4", "#ddd6fe", "#bfdbfe", "#a7f3d0"]} speed={0.001} />
      </div>
      <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-16 relative z-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline text-[#6b7280]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#f87c96] to-[#c084fc]">
            Report a Missing Loved One
          </h1>
          <p className="text-[#6b7280]">
            Please provide as much detail as possible to help others identify your missing loved one.
          </p>
        </div>

        <Tabs defaultValue="person" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/50 backdrop-blur-sm">
            <TabsTrigger
              value="person"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f9a8d4]/30 data-[state=active]:to-[#ddd6fe]/30"
            >
              <User className="h-4 w-4" />
              Person
            </TabsTrigger>
            <TabsTrigger
              value="pet"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ddd6fe]/30 data-[state=active]:to-[#bfdbfe]/30"
            >
              <PawPrint className="h-4 w-4" />
              Pet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="person">
            <Card className="bg-white/80 backdrop-blur-sm border-[#f0f0f5]">
              <CardHeader>
                <CardTitle className="text-[#374151]">Missing Person Information</CardTitle>
                <CardDescription className="text-[#6b7280]">
                  Enter details about the missing person to help others identify them.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter first name"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter last name"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter age"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup defaultValue="female" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Photos</Label>
                  <PhotoUploader />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Date Last Seen
                    </Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time Last Seen (Approximate)</Label>
                    <Input id="time" type="time" className="border-[#e5e7eb] focus-visible:ring-[#c084fc]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Last Seen Location
                  </Label>
                  <LocationPicker />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Physical Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Height, weight, hair color, eye color, distinguishing features, what they were wearing, etc."
                    rows={4}
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medical">Medical Conditions</Label>
                  <Textarea
                    id="medical"
                    placeholder="Any medical conditions, medications, or special needs"
                    rows={3}
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information</Label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                    <Input
                      id="contact-phone"
                      placeholder="Phone number"
                      type="tel"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      id="contact-email"
                      placeholder="Email address"
                      type="email"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reward">Reward (Optional)</Label>
                  <Input
                    id="reward"
                    placeholder="Enter reward amount if applicable"
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-[#6b7280] mt-0.5" />
                  <p className="text-[#6b7280]">
                    All information will be publicly visible. Please only share what you're comfortable with others
                    seeing.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                <Button variant="outline" className="sm:w-1/3 border-[#e5e7eb] text-[#6b7280] hover:bg-[#f9fafb]">
                  Save as Draft
                </Button>
                <Button className="sm:w-2/3 bg-gradient-to-r from-[#f87c96] to-[#c084fc] hover:opacity-90">
                  Submit Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pet">
            <Card className="bg-white/80 backdrop-blur-sm border-[#f0f0f5]">
              <CardHeader>
                <CardTitle className="text-[#374151]">Missing Pet Information</CardTitle>
                <CardDescription className="text-[#6b7280]">
                  Enter details about your missing pet to help others identify them.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pet-name">Pet's Name</Label>
                    <Input
                      id="pet-name"
                      placeholder="Enter pet's name"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pet-type">Type of Pet</Label>
                    <Input
                      id="pet-type"
                      placeholder="Dog, Cat, Bird, etc."
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="breed">Breed</Label>
                    <Input
                      id="breed"
                      placeholder="Enter breed"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      placeholder="Enter age (years)"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Photos</Label>
                  <PhotoUploader />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Date Last Seen
                    </Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time Last Seen (Approximate)</Label>
                    <Input id="time" type="time" className="border-[#e5e7eb] focus-visible:ring-[#c084fc]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Last Seen Location
                  </Label>
                  <LocationPicker />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Physical Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Color, size, weight, distinguishing features, collar details, etc."
                    rows={4}
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="behavior">Behavior</Label>
                  <Textarea
                    id="behavior"
                    placeholder="Friendly, shy, responds to name, any unique behaviors"
                    rows={3}
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medical">Medical Conditions</Label>
                  <Textarea
                    id="medical"
                    placeholder="Any medical conditions, medications, or special needs"
                    rows={2}
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="microchip">Microchip/ID</Label>
                  <Input
                    id="microchip"
                    placeholder="Microchip number, tag ID, etc. (if applicable)"
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information</Label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                    <Input
                      id="contact-phone"
                      placeholder="Phone number"
                      type="tel"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      id="contact-email"
                      placeholder="Email address"
                      type="email"
                      className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reward">Reward (Optional)</Label>
                  <Input
                    id="reward"
                    placeholder="Enter reward amount if applicable"
                    className="border-[#e5e7eb] focus-visible:ring-[#c084fc]"
                  />
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-[#6b7280] mt-0.5" />
                  <p className="text-[#6b7280]">
                    All information will be publicly visible. Please only share what you're comfortable with others
                    seeing.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                <Button variant="outline" className="sm:w-1/3 border-[#e5e7eb] text-[#6b7280] hover:bg-[#f9fafb]">
                  Save as Draft
                </Button>
                <Button className="sm:w-2/3 bg-gradient-to-r from-[#f87c96] to-[#c084fc] hover:opacity-90">
                  Submit Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
