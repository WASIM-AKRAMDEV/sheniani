import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

const Footer = () => {
  return (
    <footer >
     <Container>
     <div className="flex flex-wrap py-12 justify-between gap-8">
        <div className="lg:flex-8 md:flex-6 min-w-[300px]">
          <Image src="/images/logo.png" alt="Logo" width={238} height={38} />
          <p className="text-subheading-200 mt-3 mb-5">
            When the precision of technology meets human passion,
            <br />
            the result is extraordinary construction.
          </p>
          <div className="flex gap-5">
            <Link href="https://www.facebook.com">
              <Image className="h-[18px]" src="/icons/facebook.svg" alt="Facebook" width={25} height={18} />
            </Link>
            <Link href="https://www.instagram.com">
              <Image className="h-[18px]" src="/icons/instagram.svg" alt="Instagram" width={25} height={18} />
            </Link>
            <Link href="https://www.youtube.com">
              <Image className="h-[18px]" src="/icons/youtube.svg" alt="YouTube" width={25} height={18} />
            </Link>
            <Link href="https://www.twitter.com">
              <Image className="h-[18px]" src="/icons/twitter.svg" alt="Twitter" width={25} height={18} />
            </Link>
          </div>
        </div>

        <nav className="flex flex-4 justify-between gap-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-1">Support</h3>
            <Link href="/documentation" className="footer-link">Documentation</Link>
            <Link href="/get-in-touch" className="footer-link">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-1">Company</h3>
            <Link href="/about-us" className="footer-link">About Us</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-1">Legal</h3>
            <Link href="/privacy-policy" className="footer-link">Privacy</Link>
            <Link href="/terms-of-service" className="footer-link">Terms</Link>
            <Link href="/partners" className="footer-link">Partners</Link>
          </div>
        </nav>
      </div>
     </Container>
    </footer>
  );
};

export default Footer;
