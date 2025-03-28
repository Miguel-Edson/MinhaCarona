"use client"
import React, { useState } from "react";
import UpcomingCard from "./upComingCard";
import { motion } from "framer-motion";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useDrag } from "react-use-gesture";
import UpcomingCardMobile from './upComingCardMobile'

const eventos = [
    {
        title: "Carnabral ",
        local: "Sobral",
        image: "/assets/carnabral.png",
        data: "17/03/2025",
        description: "Chicabana no Trio Elétrico é certeza de muita música boa e aquela energia contagiante que só o CarnaSobral tem! Este ano, a folia vem com tudo, para fazer você pular, cantar e viver momentos que vão ficar na memória! 🔥🎉📍ONDE COMPRAR?ONLINE: brasilticket.com.brSobral: Loja CarnaSobral (Sobral Shopping) ✅ Só na loja você parcela seu boleto do bloco em até 3x sem juros no cartão."
    },
    {
        title: "São João",
        local: "Sobral - Praça de Cuba",
        image: "/assets/saojoao.jpg",
        data: "20/03/2025",
        description: "Chicabana no Trio Elétrico é certeza de muita música boa e aquela energia contagiante que só o CarnaSobral tem! Este ano, a folia vem com tudo, para fazer você pular, cantar e viver momentos que vão ficar na memória! 🔥🎉📍ONDE COMPRAR?ONLINE: brasilticket.com.brSobral: Loja CarnaSobral (Sobral Shopping) ✅ Só na loja você parcela seu boleto do bloco em até 3x sem juros no cartão."
    },
    {
        title: "Sana",
        local: "Fortaleza",
        image: "/assets/sana.jpg",
        data: "17/03/2025",
        description: "O Sana é o maior evento geek do Norte e Nordeste do Brasil, reunindo fãs de anime, mangá, games, cultura pop e entretenimento em uma experiência única. Realizado duas vezes ao ano, em janeiro e julho, no Centro de Eventos do Ceará, o Sana atrai, em média, 150 mil pessoas anualmente, consolidando-se como um dos maiores festivais do segmento no país. Com uma estrutura completa e atrações para todos os públicos, o evento conta com esculturas geek exclusivas, criadas pelo renomado artista Walterlan Veríssimo, além de diversos palcos e espaços temáticos que recebem convidados nacionais e internacionais."
       
    }
];

export default function UpcomingEvents() {
    const [indice, setIndice] = useState(0);

    const prevEvent = () => {
        setIndice((prev) => (prev === 0 ? eventos.length - 1 : prev - 1));
    };

    const nextEvent = () => {
        setIndice((prev) => (prev === eventos.length - 1 ? 0 : prev + 1));
    };

    const bind = useDrag(({ movement: [mx], down, direction: [dx] }) => {
        if (!down) {
            if (dx > 0) prevEvent();
            else if (dx < 0) nextEvent();
        }
    });

    return (
        <div className="w-full h-fit py-[4rem] flex flex-col items-center mx-auto bg-white_ice">
            <div className="w-full max-w-[70rem] flex flex-col f-full my-[3rem]">
                <h1 className="titulo_sessao text-black mb-[2rem] text-center md:text-left">Próximos eventos</h1>

                <div className="flex justify-between items-center my-auto w-full max-w-[70rem]">
                    <button onClick={prevEvent} className="md:flex hidden text-3xl active:text-primary_blue active:scale-100 ease-in-out transition-all duration-100 text-primary_blue hover:scale-125 hover:text-secundary_blue">
                        <FaArrowCircleLeft />
                    </button>
                    <div className="hidden md:flex">
                        <motion.div
                            key={indice}
                            {...bind()}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -200, opacity: 0 }}
                            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                        >
                            <UpcomingCard {...eventos[indice]} />
                        </motion.div>
                    </div>

                    <div className="md:hidden flex px-[2rem]">
                        <motion.div
                            key={indice}
                            {...bind()}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                            
                        >
                            <UpcomingCardMobile {...eventos[indice]} />
                        </motion.div>
                    </div>

                    <button onClick={nextEvent} className="md:flex hidden text-3xl active:text-primary_blue active:scale-100 ease-in-out transition-all duration-100 text-primary_blue hover:scale-125 hover:text-secundary_blue">
                        <FaArrowCircleRight />
                    </button>
                </div>

                {/* Indicadores de posição */}
                <div className="flex justify-center mt-4">
                    {eventos.map((_, i) => (
                        <div
                            key={i}
                            className={`md:w-3 w-2 md:h-3 h-2 mx-1 rounded-full ${i === indice ? "bg-primary_blue" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
