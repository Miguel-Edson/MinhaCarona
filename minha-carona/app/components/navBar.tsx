"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import ButtonNavbar from "./buttonNavBar";
import Logo from "../../public/assets/Logo-Simple.svg"
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userAvatar = "/images/default-avatar.png"; // Avatar genérico
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const handleNav = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 justify-between items-center py-4 bg-primary_blue text-white w-full">
        
        <div className="hidden md:flex max-w-[70.25rem] w-full items-center justify-between mx-auto">

            <div className="flex items-center justify-between w-full">
                <div>
                    <ul className="flex gap-6 items-center">
                        
                        <Image src={Logo} alt="Logo" width={50} height={50}  />
                        
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

                <div>
                    {isLoggedIn ? (
                        <div className="flex items-center gap-2">
                            <Link href="/perfil" className="hover:underline">
                            Perfil
                            </Link>
                            <Image
                            src={userAvatar}
                            alt="Avatar do usuário"
                            width={40}
                            height={40}
                            className="rounded-full border"
                            />
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <ButtonNavbar href="#"> Login </ButtonNavbar>
                            <Button href="/#"> Cadastrar-se </Button>
                        </div>
                )}
                </div>

            </div>

        </div>

      
        {/* Menu responsivo */}
        <div className="md:hidden flex max-w-full h-fit  mx-auto items-center justify-between">
            <div className=" max-w-[20rem] relative flex justify-between mx-auto w-full">
                <Image src={Logo} alt="Logo" width={50} height={50} className="z-10"  />

                <div onClick={handleNav} className="block md:hidden items-center" >
                    {isMobileMenuOpen ? <AiOutlineClose className="z-10 absolute text-detail-green right-0 top-1/2 -translate-y-1/2" size={30}/>
                    : 
                    <AiOutlineMenu className="z-10 absolute text-detail-green right-0 top-1/2 -translate-y-1/2"  size={30} />}
                </div>
            </div>

            <div className={isMobileMenuOpen ? 'absolute left-0 top-[5rem] w-screen h-fit bg-primary_blue  ease-in-out duration-500 font-bold    ': 'fixed top-[-100%]'}>
                    <ul className="flex-col items-center mx-auto text-center py-8">                        
                        {/* <Image src={Logo} alt="Logo" width={50} height={50}  /> */}
                        
                        <li className="py-2">
                            <ButtonNavbar href="#"> Carona </ButtonNavbar>
                        </li>
                        
                        <li className="py-2">
                            <ButtonNavbar href="#"> Dirigir </ButtonNavbar>
                        </li>
                        
                        <li className="py-2">
                            <ButtonNavbar href="#"> Eventos </ButtonNavbar>
                        </li>
                    </ul>                

            </div>
        </div>
    </nav>
  );
}
