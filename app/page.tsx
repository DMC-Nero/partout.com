import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { PartsGrid } from "@/components/parts-grid"
import { FeaturedCategories } from "@/components/featured-categories"
import { TrustBadges } from "@/components/trust-badges"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-20">
        {/* Hero Section */}
        <section className="px-4 py-6 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Quality Auto Parts
            </h1>
            <p className="text-muted-foreground text-lg mb-6">Browse thousands of parts from trusted sellers</p>
            <TrustBadges />
          </div>
        </section>

        {/* Featured Categories */}
        <section className="px-4 py-6">
          <FeaturedCategories />
        </section>

        {/* Parts Grid */}
        <section className="px-4">
          <PartsGrid />
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
