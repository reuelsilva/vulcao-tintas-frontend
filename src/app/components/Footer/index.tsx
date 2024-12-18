import Image from "next/image";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <footer className="bg-dark-blue px-5 py-12.5">
            <div className="flex flex-col-reverse gap-3 items-center">
          <Image src="/logo.png" alt="Vulcão Tintas" width={150} height={150} />
          <ul>
            <li className="text-sm text-white"><Link href="https://www.instagram.com/vulcaotintas_lojadetintas/" target="_blank">Instagram <InstagramIcon/></Link></li>
          </ul>
        </div>
            <p className="text-xs font-medium text-white text-center mt-8">© Vulcão Tintas - Todos os direitos reservados.</p>
        </footer>
    )
}