"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function LocationPicker() {
  const [address, setAddress] = useState("")

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          placeholder="Enter address or location description"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1"
        />
        <Button variant="outline" type="button" size="icon">
          <MapPin className="h-4 w-4" />
          <span className="sr-only">Use current location</span>
        </Button>
      </div>

      <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
        <div className="text-center p-4">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Map view will appear here</p>
          <p className="text-xs text-muted-foreground mt-1">Enter an address or use your current location</p>
        </div>
      </div>
    </div>
  )
}
