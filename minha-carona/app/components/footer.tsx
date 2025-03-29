import React from "react";
import Logo from "@/public/assets/Logo-Extendida.svg"
import Image from "next/image";
import ButtonNavbar from "./buttonNavBar";

export default function Footer (){
    return (
        <div className="w-full bg-primary_blue ">
            <div className="flex flex-col w-full justify-center mx-auto items-center py-[2rem]">
                <div className="md:flex-row flex-col flex w-full max-w-[70.5rem] justify-between items-center mx-auto ">
                    <Image
                        src={Logo}
                        alt="logo do projeto"
                        width={1000}
                        height={1000}
                        className="w-[10rem] md:w-[14rem] h-full"
                    />

                    <ul className="md:flex-row flex-col flex text-center pt-[1rem] md:pt-[2rem] ">
                        <li>
                            <ButtonNavbar href="#"> Rotas populares </ButtonNavbar>
                        </li>
                        
                        <li>
                            <ButtonNavbar href="#"> Eventos </ButtonNavbar>
                        </li>
                        
                        <li>
                            <ButtonNavbar href="#"> Saiba mais </ButtonNavbar>
                        </li>
                    </ul>
                </div>
                <hr className="w-[20rem] md:w-full max-w-[70.5rem] border-t border-1 border-gray-300 my-4" />

                <div>
                    <p className="subtitulo">© 2025 All rights reserved</p>
                </div>
                 

            </div>
        </div>
    );

}