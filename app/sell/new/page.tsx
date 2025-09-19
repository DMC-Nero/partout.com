"use client"

import { Header } from "@/components/header"
import { NewListingForm } from "@/components/seller/new-listing-form"
import { AuthGuard } from "@/components/auth-guard"

export default function NewListingPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pb-20">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">List a New Part</h1>
            <NewListingForm />
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
