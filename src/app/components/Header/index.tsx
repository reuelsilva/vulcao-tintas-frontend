import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center h-20 px-6 bg-dark-blue sm:h-25 sm:px-16">
            <Link href="/">
                <Image src="/logo.png" alt="Vulcão Tintas" width={150} height={150} className="sm:w-[180px]" priority />
            </Link>
        </header>
    )
}