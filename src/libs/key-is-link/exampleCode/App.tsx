import { useState, type ChangeEvent } from "react";
import "./App.css";
import type { PokemonForm } from "./typeLink";
import { myApi } from "./api";
import { createRoot } from "react-dom/client";

export function App() {
  const [pokeNum, setPokeNum] = useState(1);
  const [pokemon, setPokemon] = useState<PokemonForm>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!isNaN(num)) {
      setPokeNum(num);
    }
  };

  const handleClick = async () => {
    try {
      const res = await myApi.api.v2.pokemon$form(pokeNum).GET(); // api call
      setPokemon(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background">
      <img src={pokemon?.sprites.front_default ?? undefined} />
      <input value={pokeNum} onChange={handleChange} />
      <button onClick={handleClick}>req</button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
