"use client"
import { useState } from "react";
import axios from "axios";

export default function LocationSearch() {
  const [query, setQuery] = useState(""); // Texto digitado pelo usuário
  const [suggestions, setSuggestions] = useState([]); // Lista de locais sugeridos

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) { // Apenas faz a requisição se houver 3 ou mais caracteres
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );

        setSuggestions(response.data); // Salva as sugestões no estado
      } catch (error) {
        console.error("Erro ao buscar localizações:", error);
      }
    } else {
      setSuggestions([]); // Limpa sugestões se o input for apagado
    }
  };

  const handleSelectLocation = (location: any) => {
    setQuery(location.display_name); // Preenche o input com o local selecionado
    setSuggestions([]); // Esconde as sugestões após a seleção
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="bg-white text-primary_blue rounded-lg block w-full p-2.5"
        placeholder="Local de Origem"
      />

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg">
          {suggestions.map((location: any) => (
            <li
              key={location.place_id}
              onClick={() => handleSelectLocation(location)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
