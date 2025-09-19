"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SellerDashboard } from "@/components/seller/seller-dashboard"
import { AuthGuard } from "@/components/auth-guard"

export default function SellPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pb-20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <SellerDashboard />
          </div>
        </main>

        <BottomNav />
      </div>
    </AuthGuard>
  )
}
