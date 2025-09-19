"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

export function PartsGrid() {
  const router = useRouter()

  const mockParts = [
    {
      id: 1,
      title: "BMW E46 Brake Pads - Front Set",
      price: 89.99,
      originalPrice: 120.0,
      condition: "New",
      brand: "BMW",
      model: "E46 3 Series",
      year: "1999-2006",
      image: "/placeholder.svg?key=fcp26",
      seller: {
        name: "AutoParts Pro",
        rating: 4.8,
        verified: true,
        location: "Los Angeles, CA",
      },
      negotiable: true,
      compatibility: ["BMW E46 320i", "BMW E46 325i", "BMW E46 330i"],
    },
    {
      id: 2,
      title: "Honda Civic Engine Air Filter",
      price: 24.99,
      condition: "New",
      brand: "Honda",
      model: "Civic",
      year: "2016-2021",
      image: "/honda-air-filter.jpg",
      seller: {
        name: "Civic Specialist",
        rating: 4.9,
        verified: true,
        location: "Miami, FL",
      },
      negotiable: false,
      compatibility: ["Honda Civic Si", "Honda Civic Type R", "Honda Civic Sport"],
    },
    {
      id: 3,
      title: "Ford F-150 LED Headlight Assembly",
      price: 299.99,
      condition: "Used - Excellent",
      brand: "Ford",
      model: "F-150",
      year: "2015-2020",
      image: "/ford-f150-led-headlight.jpg",
      seller: {
        name: "Truck Parts USA",
        rating: 4.7,
        verified: false,
        location: "Dallas, TX",
      },
      negotiable: true,
      compatibility: ["Ford F-150 XLT", "Ford F-150 Lariat", "Ford F-150 King Ranch"],
    },
    {
      id: 4,
      title: "Toyota Camry Alternator",
      price: 159.99,
      originalPrice: 200.0,
      condition: "Refurbished",
      brand: "Toyota",
      model: "Camry",
      year: "2012-2017",
      image: "/toyota-alternator.jpg",
      seller: {
        name: "Reliable Auto",
        rating: 4.6,
        verified: true,
        location: "Phoenix, AZ",
      },
      negotiable: false,
      compatibility: ["Toyota Camry LE", "Toyota Camry SE", "Toyota Camry XLE"],
    },
    {
      id: 5,
      title: "Mercedes C-Class Door Handle Set",
      price: 79.99,
      condition: "Used - Good",
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: "2008-2014",
      image: "/mercedes-door-handle.jpg",
      seller: {
        name: "Euro Parts Direct",
        rating: 4.5,
        verified: true,
        location: "Seattle, WA",
      },
      negotiable: true,
      compatibility: ["Mercedes C300", "Mercedes C350", "Mercedes C63 AMG"],
    },
    {
      id: 6,
      title: "Jeep Wrangler Soft Top",
      price: 449.99,
      condition: "New",
      brand: "Jeep",
      model: "Wrangler",
      year: "2018-2023",
      image: "/jeep-wrangler-soft-top.jpg",
      seller: {
        name: "Off-Road Experts",
        rating: 4.9,
        verified: true,
        location: "Denver, CO",
      },
      negotiable: false,
      compatibility: ["Jeep Wrangler Sport", "Jeep Wrangler Sahara", "Jeep Wrangler Rubicon"],
    },
  ]

  const handlePartClick = (partId: number) => {
    router.push(`/parts/${partId}`)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-playfair text-2xl font-bold text-foreground">Featured Parts</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockParts.map((part) => (
          <Card
            key={part.id}
            className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            onClick={() => handlePartClick(part.id)}
          >
            <div className="relative">
              <img
                src={part.image || "/placeholder.svg"}
                alt={part.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant={part.condition === "New" ? "default" : "secondary"} className="text-xs">
                  {part.condition}
                </Badge>
                {part.negotiable && (
                  <Badge variant="outline" className="text-xs bg-background/90">
                    Negotiable
                  </Badge>
                )}
              </div>
              {part.originalPrice && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    Save ${(part.originalPrice - part.price).toFixed(0)}
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {part.brand} {part.model} • {part.year}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">${part.price}</span>
                    {part.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${part.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">{part.seller.name}</span>
                    {part.seller.verified && (
                      <Badge variant="outline" className="text-xs px-1 py-0">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-muted-foreground">{part.seller.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{part.seller.location}</span>
                </div>

                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
