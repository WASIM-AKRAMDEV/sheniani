"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CONNECT_PACKAGES } from "@/data/connect-packages-data";

export default function BuyConnects() {
  const [availableConnects, setAvailableConnects] = useState(616);
  const [selectedPackage, setSelectedPackage] = useState(CONNECT_PACKAGES[0]);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");

  const newBalance = availableConnects + Number.parseInt(selectedPackage.value);
  const expiryDate = format(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    "MMMM dd, yyyy"
  );

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      setError("Promo code cannot be empty");
      return;
    }
    // Example promo code logic
    if (promoCode.toLowerCase() === "bonus10") {
      const bonus = 10;
      setAvailableConnects((prev) => prev + bonus);
      setError("");
    } else {
      setError("Invalid promo code");
    }
  };

  const handleContinue = () => {
    alert(
      `Purchased ${selectedPackage.value} connects for $${selectedPackage.price}`
    );
    setAvailableConnects(
      availableConnects + Number.parseInt(selectedPackage.value)
    );
  };

  return (
    <div>
      <div className="p-6 border-2 rounded-xl border-primary-500/10 gap-0">
        <h2 className="text-lg font-bold mb-6 text-light-black">
          Buy Connects
        </h2>

        <div className="pb-8 border-b">
          <p className="text-lg text-light-black font-bold mb-4">
            Your available connects
          </p>
          <p className="text-para text-base font-lato">{availableConnects}</p>
        </div>

        <div className="py-8 border-b">
          <p className="text-lg text-light-black font-bold mb-2">
            Select the amount to buy
          </p>
          <Select
            onValueChange={(value) =>
              setSelectedPackage(
                CONNECT_PACKAGES.find((p) => p.value === value)!
              )
            }
            defaultValue={selectedPackage.value}
          >
            <SelectTrigger className="max-w-[370px] text-light-para">
              <SelectValue placeholder="Select amount" />
            </SelectTrigger>
            <SelectContent>
              {CONNECT_PACKAGES.map((pkg) => (
                <SelectItem key={pkg.value} value={pkg.value}>
                  {pkg.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="py-8 border-b">
          <p className="text-lg text-light-black font-bold mb-4">
            Your account will be charged
          </p>
          <p className="text-sm font-lato text-light-para">
            ${selectedPackage.price.toFixed(2)} + Tax
          </p>
        </div>

        <div className="py-8 border-b">
          <p className="text-lg text-light-black font-bold mb-0.5">
            Your new connect balance will be
          </p>
          <p className="text-para text-base font-lato">{newBalance}</p>
        </div>

        <div className="py-8 border-b">
          <p className="text-lg text-light-black font-bold mb-0.5">
            These connects expire on
          </p>
          <p className="text-para text-base font-lato">{expiryDate}</p>
        </div>

        <div className="py-8 border-b">
          <p className="text-lg text-light-black font-bold mb-3">Promo Code</p>
          <div className="flex gap-2 mt-2">
            <Input
              placeholder="Enter Code"
              className="max-w-[433px]"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <Button
              variant="outline"
              onClick={handleApplyPromo}
              className="border-dark-primary h-11 rounded-lg px-10 text-black"
            >
              <span className="text-base font-bold font-lato">Apply</span>
            </Button>
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>

        {/* Terms */}
        <div className="border-t pt-8 max-w-[780px]">
          <p className="text-para text-base font-lato mb-5.5">
            This bundle of Connects will expire 1 year from today. Unused
            Connects rollover to the next month.
          </p>
          <p className="text-para text-base font-lato">
            You&apos;re authorizing SHENIANI to charge your account. If you have
            sufficient funds, we will withdraw from your account balance. If
            not, the full amount will be charged to your primary billing method.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-12.5">
        <Button onClick={handleContinue} className="w-[253px]">
          Continue
        </Button>
        <Button variant="secondary" className="px-6">
          Cancel
        </Button>
      </div>
    </div>
  );
}
