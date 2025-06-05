"use client"

import { redirect } from "next/navigation"

export default function Dashboard() {
  // Redirect to the appropriate dashboard based on user role
  // For now, we're redirecting to service provider dashboard
  redirect("/dashboard/service-provider/home")

  // In a real application, you would check the user's role and redirect accordingly:
  // const { user } = useAuth();
  // if (user.role === "service-provider") {
  //   redirect("/dashboard/service-provider/home");
  // } else if (user.role === "client") {
  //   redirect("/dashboard/client/home");
  // } else if (user.role === "admin") {
  //   redirect("/dashboard/admin/home");
  // }
}
