import { lojas } from "@/app/constants/lojas"
import { LojasProps } from "@/app/types/lojas-type";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocaltionOnIcon from '@mui/icons-material/LocationOn';

export default function LojasSection(){
    return(
        <section className="bg-dark-blue px-5 py-12.5">
          <h2 className="text-2xl text-white font-semibold text-center uppercase">Nossas <span className="text-yellow">Lojas</span></h2>
          <div className="grid grid-cols-sm md:grid-cols-md lg:grid-cols-lg justify-center gap-6 mt-6 md:mt-8">
            {
              lojas.map((loja: LojasProps, index:number) => {
                return (
                  <div key={index} className="flex flex-col bg-white">
                    <iframe src={loja.link_mapa} style={{ border: 0, width: '100%' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="mt-auto px-6 py-3">
                      <h3 className="text-xl font-semibold">{loja.nome}</h3>
                      <p className="text-sm font-medium my-3"><LocaltionOnIcon />{loja.endereco}</p>
                      <a href={`https://api.whatsapp.com/send/?phone=${loja.telefone}&text&type=phone_number&app_absent=0`} target="_blank" className="inline-block text-white text-sm bg-green-500 px-3 py-2"><WhatsAppIcon style={{ marginRight: 8 }} />WhatsApp</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
    )
}