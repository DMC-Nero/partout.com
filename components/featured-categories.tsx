import { Card } from "@/components/ui/card"
import { PenLine as Engine, Wrench, Zap, Disc, Car, Settings } from "lucide-react"

export function FeaturedCategories() {
  const categories = [
    { name: "Engine Parts", icon: Engine, count: "2.5k+" },
    { name: "Brake System", icon: Disc, count: "1.8k+" },
    { name: "Electrical", icon: Zap, count: "3.2k+" },
    { name: "Body Parts", icon: Car, count: "4.1k+" },
    { name: "Tools", icon: Wrench, count: "890+" },
    { name: "Accessories", icon: Settings, count: "1.5k+" },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <category.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-foreground">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} parts</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
