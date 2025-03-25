"use client"
import React from "react";
import CardEvents from "./cardEvent";
import { useState, useEffect } from "react";


export default function BurningEvents() {
    const [events, setEvents] = useState([
        {
            id: 1,
            origem: "São Paulo",
            destino: "Rio de Janeiro",
            valor: 120.0,
            duracao: 6,
            imagem: "/assets/rio.jpg",
        },
        {
            id: 2,
            origem: "Belo Horizonte",
            destino: "São Paulo",
            valor: 100.0,
            duracao: 7,
            imagem: "/assets/bh.jpg",
        },
        {
            id: 3,
            origem: "Curitiba",
            destino: "Florianópolis",
            valor: 80.0,
            duracao: 4,
            imagem: "/assets/floripa.jpg",
        },
        {
            id: 4,
            origem: "Brasília",
            destino: "Goiânia",
            valor: 60.0,
            duracao: 3,
            imagem: "/assets/goiania.jpeg",
        },

    ]);

    useEffect(() => {
        async function fetchData() {
          try {
            // Simulação de chamada à API (substituir pela requisição real no futuro)
            // const response = await fetch("/api/viagens");
            // const data = await response.json();
            // setEvents(data);
          } catch (error) {
            console.error("Erro ao buscar os eventos:", error);
          }
        }
    
        fetchData();
      }, []);

    return (
        <div className="max-w-[70rem] w-full flex mx-auto my-[4rem] flex-col">
            <h1 className="titulo_sessao text-black pb-[2rem] text-center md:text-left">Viagens Populares</h1>

                <a href="#" className="flex md:flex-row flex-col justify-center md:mx-0 mx-auto md:justify-between">
                    {events.map((event) => (
                        <CardEvents key={event.id} {...event} />
                    ))}
                </a>
                
        </div>
    )
}
