import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.png" alt="Logo" width={237} height={37} />
    </Link>
  );
}
