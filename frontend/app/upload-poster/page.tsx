import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, Calendar, MapPin, AlertCircle } from "lucide-react"
import { PhotoUploader } from "@/components/photo-uploader"
import { LocationPicker } from "@/components/location-picker"
import { DatePicker } from "@/components/date-picker"

export default function UploadPosterPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Upload a Missing Poster</h1>
        <p className="text-muted-foreground">
          Help amplify a missing person or pet poster you've seen in your community.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Poster Information</CardTitle>
          <CardDescription>
            Upload a clear photo of the missing poster and provide details about where you saw it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <Upload className="h-4 w-4" />
              Poster Photo
            </Label>
            <PhotoUploader maxPhotos={1} />
            <p className="text-sm text-muted-foreground">
              Please ensure the entire poster is visible and text is readable.
            </p>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Location Where Poster Was Seen
            </Label>
            <LocationPicker />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Date Poster Was Seen
            </Label>
            <DatePicker />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-info">Additional Information</Label>
            <Textarea
              id="additional-info"
              placeholder="Any additional details about the poster or location (e.g., 'Posted on community board at grocery store')"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Your Contact Information (Optional)</Label>
            <div className="grid gap-4 md:grid-cols-2">
              <Input id="contact-name" placeholder="Your name" />
              <Input id="contact-email" placeholder="Email address" type="email" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your contact information will not be publicly displayed.
            </p>
          </div>

          <div className="flex items-start space-x-2 text-sm">
            <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-muted-foreground">
              By uploading this poster, you're helping to spread awareness. Our team will review the submission before
              publishing.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
          <Button variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <Button>Submit Poster</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
