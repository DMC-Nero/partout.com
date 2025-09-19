"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { FavoritesList } from "@/components/profile/favorites-list"
import { AuthGuard } from "@/components/auth-guard"

export default function FavoritesPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pb-20">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Favorites</h1>
            <FavoritesList />
          </div>
        </main>

        <BottomNav />
      </div>
    </AuthGuard>
  )
}
