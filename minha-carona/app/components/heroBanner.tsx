import React from "react";
import Link from "next/link";
import Carro from "../../public/assets/Car driving-pana.svg"
import Image from "next/image";
import Button from "./button";
import LocationSearch from "./inputLocal";



export default function HeroBanner() {


  return (
    <div className="w-full h-fit flex bg-white_ice overflow-hidden">
      <div className="hidden w-full max-w-[70rem] md:flex mx-auto justify-between gap-4 my-[4rem]">

        <div className="w-[50%] flex flex-col justify-center my-auto gap-2">
            <h1 className="display text-primary_blue"><a className="text-secundary_red">Economize</a> achando a carona ideal para viajar!</h1>
            
            <h3 className="paragrafo text-primary_blue w-[26rem]">Adicione as informações sobre a sua viagem e busque pela carona ideal para você.</h3>

            <form className="flex flex-col gap-y-2 h-fit justify-between w-[16rem]">
                {/* <LocationSearch /> */}
                <input type="text" id="origin" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Origem" required />
                <input type="text" id="destiny" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Destino" required />
                <input type="date" id="data" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Origem" required />
                <Button>Buscar Carona</Button>
            </form>

            <h3 className="subtitulo pt-2 text-primary_blue">Você vai ser o Motorista? cadastre sua viagem aqui!</h3>
            
            <Link href="#" className="paragrafo bg-primary_blue text-white px-4 my-auto py-2 item rounded-lg hover:bg-black w-fit text-center">
                Adicionar Carona
            </Link>

        </div>

        <div className="bg-white rounded-3xl w-[50%]">
        <a href="https://storyset.com/people"><Image   
            src={Carro}
            alt="Avatar do usuário"
            width={600}
            height={600}
            className="rounded-3xl"
            />
            
            </a>
        </div>
      </div>
      {/* Versão reponsiva */}
      <div className="md:hidden w-full min-h-screen  max-w-[70rem] flex flex-col mx-auto my-auto  justify-center gap-2 py-[2rem] px-[2rem]">

        
            <h1 className="display text-primary_blue text-center"><a className="text-secundary_red">Economize</a> achando a carona ideal para viajar!</h1>
            
            <a href="https://storyset.com/people">
                <Image   
                    src={Carro}
                    alt="Avatar do usuário"
                    width={600}
                    height={600}
                    className="rounded-3xl "
                />
            </a>

            <h3 className="paragrafo text-primary_blue w-full text-center">Adicione as informações sobre a sua viagem e busque pela carona ideal para você.</h3>

            <form className="flex flex-col gap-y-2 h-fit justify-center w-full  mx-auto items-center">
                {/* <LocationSearch /> */}
                <input type="text" id="origin" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Origem" required />
                <input type="text" id="destiny" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Origem" required />
                <input type="date" id="data" className="bg-white  text-primary_blue subtitulo rounded-lg block w-full p-2.5 " placeholder="Local de Origem" required />
                <Button>Buscar Carona</Button>
            </form>

            <h3 className="subtitulo pt-2 text-primary_blue text-center">Você vai ser o Motorista? cadastre sua viagem aqui!</h3>
            
            <div className="flex w-full justify-center">
            <Link href="#" className="paragrafo bg-primary_blue text-white px-4 my-auto py-2 item rounded-lg hover:bg-black w-fit text-center">
                Adicionar Carona
            </Link>
            </div>
        
      </div>
    </div>
  ) 
}
