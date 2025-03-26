import React from "react";
import Image from "next/image";


interface UpcomingCardProps {
    title: string;
    data: string;
    local: string;
    description: string;
    image: string;
}

export default function UpcomingCardMobile ({title,data,local,description,image}: UpcomingCardProps) {

    return(
        <div className="h-fit flex flex-col justify-between gap-8 w-full my-[2rem]">
            
            <div className="w-full h-full ">
                <Image
                    src={image}
                    alt={`#`}
                    width={500}
                    height={500}
                    className="object-cover w-full rounded-4xl h-full max-h-[14rem] transition-transform duration-300 ease-in-out hover:"
                />
            </div>

            <div className="w-full flex flex-col justify-start text-primary_blue gap-[2rem] min-h-[16rem]">
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