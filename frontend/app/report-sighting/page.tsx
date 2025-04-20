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

export default function ReportSightingPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Report a Sighting</h1>
        <p className="text-muted-foreground">Report someone or a pet that might be lost or missing.</p>
      </div>

      <Tabs defaultValue="person" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="person" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Person
          </TabsTrigger>
          <TabsTrigger value="pet" className="flex items-center gap-2">
            <PawPrint className="h-4 w-4" />
            Pet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="person">
          <Card>
            <CardHeader>
              <CardTitle>Person Sighting Information</CardTitle>
              <CardDescription>Report a person who appears to be lost, confused, or in need of help.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Location Where Seen
                </Label>
                <LocationPicker />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Date Seen
                  </Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time Seen (Approximate)</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Physical Description</Label>
                <Textarea
                  id="description"
                  placeholder="Approximate age, gender, height, clothing, distinguishing features, etc."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Photo (Only if safe and appropriate to take)</Label>
                <PhotoUploader />
                <p className="text-sm text-muted-foreground">
                  Only upload photos if it was safe to take them and the person was not in distress.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="behavior">Behavior & Condition</Label>
                <Textarea
                  id="behavior"
                  placeholder="Did they appear confused, distressed, or in need of help? Were they responsive? Any other observations about their condition?"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interaction">Interaction Details</Label>
                <Textarea
                  id="interaction"
                  placeholder="Did you speak with them? What did they say? Did they share any information about themselves?"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="actions">Actions Taken</Label>
                <Textarea
                  id="actions"
                  placeholder="Did you contact authorities? Offer assistance? What was the outcome?"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Your Contact Information</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input id="contact-name" placeholder="Your name" />
                  <Input id="contact-phone" placeholder="Phone number" type="tel" />
                </div>
                <div className="mt-2">
                  <Input id="contact-email" placeholder="Email address" type="email" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your contact information will not be publicly displayed.
                </p>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                <p className="text-muted-foreground">
                  If you believe someone is in immediate danger, please contact local emergency services first.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
              <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
              </Button>
              <Button>Submit Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pet">
          <Card>
            <CardHeader>
              <CardTitle>Pet Sighting Information</CardTitle>
              <CardDescription>Report a pet that appears to be lost or stray.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Location Where Seen
                </Label>
                <LocationPicker />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Date Seen
                  </Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time Seen (Approximate)</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pet-type">Type of Pet</Label>
                  <Input id="pet-type" placeholder="Dog, Cat, Bird, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breed">Breed (if known)</Label>
                  <Input id="breed" placeholder="Enter breed if you can identify it" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Physical Description</Label>
                <Textarea
                  id="description"
                  placeholder="Color, size, distinguishing features, collar details, etc."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Photo</Label>
                <PhotoUploader />
              </div>

              <div className="space-y-2">
                <Label htmlFor="behavior">Behavior</Label>
                <Textarea
                  id="behavior"
                  placeholder="Was the pet friendly, scared, aggressive? Did it approach you? Any signs of injury or distress?"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="collar">Collar/ID Tags</Label>
                <Textarea
                  id="collar"
                  placeholder="Did the pet have a collar? Any visible tags or identification? Were you able to read any information?"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="actions">Actions Taken</Label>
                <Textarea
                  id="actions"
                  placeholder="Did you approach the pet? Contact local animal control? What was the outcome?"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="current-status">Current Status</Label>
                <RadioGroup defaultValue="still-there">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="still-there" id="still-there" />
                    <Label htmlFor="still-there">Pet was still in the area when I left</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="took-in" id="took-in" />
                    <Label htmlFor="took-in">I took the pet in temporarily</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="shelter" id="shelter" />
                    <Label htmlFor="shelter">Pet was taken to a shelter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other (please explain in notes)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Your Contact Information</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input id="contact-name" placeholder="Your name" />
                  <Input id="contact-phone" placeholder="Phone number" type="tel" />
                </div>
                <div className="mt-2">
                  <Input id="contact-email" placeholder="Email address" type="email" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your contact information will not be publicly displayed.
                </p>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                <p className="text-muted-foreground">
                  If you've found an injured animal, please contact local animal control or a veterinarian.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
              <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
              </Button>
              <Button>Submit Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
