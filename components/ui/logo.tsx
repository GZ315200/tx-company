import Link from "next/link";

import Image from 'next/image';
import logo from '@/public/images/logo.jpg'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
             <Image src={logo} alt="Company Logo" width={100} height={100} />
    </Link>
  );
}
