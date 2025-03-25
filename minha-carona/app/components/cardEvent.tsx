import React from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";


import ImagemTeste from "@/public/assets/fortaleza.jpg"

interface EventCardProps {
    origem: string;
    destino: string;
    valor: number;
    duracao: number;
    imagem: string;
}

export default function CardEvents({origem, destino, valor, duracao, imagem}: EventCardProps) {
    

    return (
        <div className="w-[15rem] md:h-[15rem] h-[12rem] flex flex-col rounded-2xl border-2 md:border-3 border-white_ice justify-between my-4 md:my-0">
            <div className="overflow-hidden rounded-t-xl">
                <Image
                    src={imagem}
                    alt={`${origem} para ${destino}`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-[9rem] transition-transform duration-300 ease-in-out hover:scale-130"
                />
            </div>

            <div className="text-black px-[0.5rem]">
                <h2 className="subtitulo">De {origem} para</h2>
                <h3 className="destaque">{destino}</h3>
            </div>

            <div className="flex justify-between px-[0.5rem] text-black opacity-60">
                <div className="flex items-center w-fit gap-2">
                    <FaRegClock/>
                    <h3>{duracao}h </h3>
                </div>

                <div className="flex items-center w-fit gap-2">
                    <HiOutlineCash/>
                    <h3> {valor},00 </h3>
                </div>

                
            </div>




        </div>
    )
}
