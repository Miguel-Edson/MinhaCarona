import React from "react";
import Image from "next/image";
import folha from "@/public/assets/folha.png"
import mao from "@/public/assets/mao.png"
import gear from "@/public/assets/gear.png"
import dinheiro from "@/public/assets/dinheiro.png"
import aboutUs from "@/public/assets/aboutUs.svg"
import Topics from "./topics";

export default function AboutUs () {

    return(
        <div className="text-black max-w-[70.5rem] items-center md:mx-auto py-[4rem] mx-[2rem] h-full">
            
            <div className="text-center flex flex-col w-full">
                <h1 className="titulo_sessao">Viaje de forma mais econômica e sustentável!</h1>
                <h4 className="paragrafo">Com nossa plataforma, motoristas e passageiros se conectam para compartilhar caronas de forma segura, econômica e prática.</h4>
            </div>

            <div className="md:flex hidden w-full justify-between gap-8 py-[4rem] text-justify">
                
                <Topics 
                image={dinheiro} 
                title="Economia para todos" 
                description="Motoristas dividem os custos da viagem e passageiros pagam menos do que gastariam com transporte tradicional."/>
                <Topics 
                image={folha} 
                title="Sustentabilidade" 
                description="Menos carros na estrada significa menos poluição e trânsito."/>
                <Topics 
                image={gear} 
                title="Praticidade" 
                description="Encontre caronas para o seu destino de forma rápida e segura."/>
                <Topics 
                image={mao} 
                title="Conexões e novas amizades" 
                description="Viajar pode ser muito mais divertido quando se compartilha o trajeto!"/>    

            </div>

            {/* Versao reponsiva */}
            <div className="md:hidden flex flex-col w-full justify-between py-[4rem] gap-[2rem]  text-justify">
                <div className="flex gap-6">
                    <Topics 
                    image={dinheiro} 
                    title="Economia para todos" 
                    description="Motoristas dividem os custos da viagem e passageiros pagam menos do que gastariam com transporte tradicional."/>
                    <Topics 
                    image={folha} 
                    title="Sustentabilidade" 
                    description="Menos carros na estrada significa menos poluição e trânsito."/>
                </div>
                <div className="flex gap-6">
                    <Topics 
                    image={gear} 
                    title="Praticidade" 
                    description="Encontre caronas para o seu destino de forma rápida e segura."/>
                    <Topics 
                    image={mao} 
                    title="Conexões e novas amizades" 
                    description="Viajar pode ser muito mais divertido quando se compartilha o trajeto!"/>    
                </div>

            </div>
            
            <div className="text-center flex flex-col w-full">
                <h1 className="titulo_sessao">Como funciona?</h1>
            </div>

            <div className="md:h-[21rem] h-fit md:flex-row flex flex-col justify-between max-w-[58rem] items-center mx-auto py-[2rem]">

                <div className="md:w-[26rem] w-full flex flex-col md:h-full h-fit gap-[2rem] text-center md:text-left justify-between">
                    <div className="flex flex-col">
                        <h3 className="destaque">Para motoristas:</h3>
                        <h4 className="subtitulo">Cadastre sua viagem informando o destino, horário e número de vagas disponíveis. Os passageiros interessados entrarão em contato, e você economiza nos gastos da viagem!</h4>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="destaque">Para passageiros:</h3>
                        <h4 className="subtitulo">Pesquise uma carona para seu destino, entre em contato com o motorista e garanta sua vaga. Simples, rápido e acessível!</h4>
                    </div>
                    
                </div>
                
                <Image   
                        src={aboutUs}
                        alt="Avatar do usuário"
                        width={600}
                        height={600}
                        className=" w-full md:w-[21rem] h-full py-[2rem] md:py-0"
                    />

            </div>


        </div>
    );
}