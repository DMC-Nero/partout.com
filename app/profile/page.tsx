"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import { AuthGuard } from "@/components/auth-guard"

export default function ProfilePage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pb-20">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <ProfileHeader />
            <ProfileTabs />
          </div>
        </main>

        <BottomNav />
      </div>
    </AuthGuard>
  )
}
