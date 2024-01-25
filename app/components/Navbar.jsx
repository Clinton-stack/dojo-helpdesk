import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Image
                src="/dojo-logo.png"
                width={70}
                height= {70}
                quality={100}
                alt="Dojo Logo"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwL/6wU9AAAAABJRU5ErkJggg=="
            />
            <h1> Dojo helpdesk </h1>
            <Link href="/"> Dashboard </Link>
            <Link href="/tickets"> Tickets </Link>
        </nav>
    );
}
