import React from "react";
import Image, { StaticImageData } from "next/image";

interface TopicProps{
    image: StaticImageData;
    title: string;
    description: string;
}


export default function Topics ({image, title, description}:TopicProps){
    return (
        <div className="flex flex-col w-full h-fit gap-2 max-w-[17.5rem] ">
                    <Image   
                        src={image}
                        alt="Avatar do usuário"
                        width={600}
                        height={600}
                        className="rounded-3xl md:w-[3rem] w-[2rem]   "
                    />
                    <h3 className="destaque">{title}</h3>
                    <h4 className="subtitulo">{description}</h4>
        </div>
    );
}