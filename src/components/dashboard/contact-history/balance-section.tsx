"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BalanceSectionProps {
  totalBalance: number
}

export function BalanceSection({ totalBalance }: BalanceSectionProps) {
  return (
    <div className="bg-white rounded-lg px-12.5 py-8 py border-2 border-primary-500/10 w-[50%]">
      <h2 className="text-para text-base mb-4 font-lato ">My Balance</h2>
      <p className="text-xl font-bold mb-4">{totalBalance}</p>
      <Link href={"/dashboard/service-provider/contact-history/buy-connects"}>
        <Button className="px-10">Buy Connects</Button>
      </Link>
    </div>
  )
}
