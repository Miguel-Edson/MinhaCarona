import React from "react";
import Image from "next/image";


interface UpcomingCardProps {
    title: string;
    data: string;
    local: string;
    description: string;
    image: string;
}

export default function UpcomingCard ({title,data,local,description,image}: UpcomingCardProps) {

    return(
        <div className="h-[30rem] flex justify-between gap-8 w-[58rem] my-[2rem]">
            
            <div className="w-[50%] h-full ">
                <Image
                    src={image}
                    alt={`#`}
                    width={500}
                    height={500}
                    className="object-cover w-full rounded-4xl h-full transition-transform duration-300 ease-in-out hover:"
                />
            </div>

            <div className="w-[50%] flex flex-col justify-start text-primary_blue gap-[2rem] ">
                <div className="h-fit flex flex-col gap-1 ">
                    <h1 className="titulo_sessao text-center">{title}</h1>
                    
                    <div className="flex w-full gap-1">
                        <h3 className="paragrafo font-bold">Local:</h3>
                        <h3 className="subtitulo">{local}</h3>
                    </div>
                    
                    <div className="flex w-full gap-1">
                        <h3 className="paragrafo font-bold">Data:</h3>
                        <h3 className="subtitulo">{data}</h3>
                    </div>
                </div>

                <p className="paragrafo" dangerouslySetInnerHTML={{ __html: description }} />

            </div>            
        
        </div>
    );

};