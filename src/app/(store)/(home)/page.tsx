import { api } from "@/data/api";
import { Products } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";

//o group serve para que se o elemento pai estiver selecionado ele muda, no caso tem o group no LINK e seta ele no classname da imagem
//imagem tem group com o hover selecionado
//o grid ele foi feito com 9 colunas e 6 linhas, isso nao quer dizer que sao 9 fotos, isso pq uma foto pode ocupar 6 colunas
//com isso vc seleciona em cada link o col-span-6 que quer dizer que ele vai ocupar 6 das 9 colunas e 6 das no linhas
//o revalidate é pra cada 1h ou qualquer que for a hora, ele atualiza a pagina, e o cache é apagado
async function getFeaturedProducts(): Promise<Products[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1h
    }
  })

  const products = await response.json();
  
  return products
}

export default async function Home() {

  const [highlightedProduct, ...otherProduct] = await getFeaturedProducts();
  

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">

      <Link href={`/product/${highlightedProduct.slug}`} className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image 
          className="group-hover:scale-105 transition-transform duration-500"
          src={highlightedProduct.image} 
          quality={100}
          width={920} 
          height={920}
          alt="Moletom"
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            {highlightedProduct.price}
          </span>
        </div>
      </Link>

      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image 
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ia-p-devs.png" 
          quality={100}
          width={920} 
          height={920}
          alt="Moletom"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI P Devs</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            R$ 400,00
          </span>
        </div>

      </Link>

      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image 
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png" 
          quality={100}
          width={920} 
          height={920}
          alt="Moletom"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Camiseta Dowhile</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            R$ 320,00
          </span>
        </div>

      </Link>
    </div>
  );
  
 
}
