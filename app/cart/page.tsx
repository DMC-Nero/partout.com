"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"
import { AuthGuard } from "@/components/auth-guard"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const router = useRouter()
  const { items, getTotalItems } = useCart()

  if (getTotalItems() === 0) {
    return (
      <AuthGuard>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="flex items-center justify-center px-4 py-20">
            <div className="text-center space-y-6">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto" />
              <div>
                <h1 className="font-playfair text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
                <p className="text-muted-foreground">Start shopping to add items to your cart</p>
              </div>
              <Button onClick={() => router.push("/")} size="lg">
                Continue Shopping
              </Button>
            </div>
          </main>
          <BottomNav />
        </div>
      </AuthGuard>
    )
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pb-20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <CartItems />
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </AuthGuard>
  )
}
