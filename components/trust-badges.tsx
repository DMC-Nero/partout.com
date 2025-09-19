import { Shield, Star, Truck, CreditCard } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: "Verified Sellers",
    },
    {
      icon: Star,
      text: "Quality Guaranteed",
    },
    {
      icon: Truck,
      text: "Fast Shipping",
    },
    {
      icon: CreditCard,
      text: "Secure Payment",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <badge.icon className="h-4 w-4 text-accent" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
