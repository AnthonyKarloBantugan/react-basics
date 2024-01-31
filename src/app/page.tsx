"use client";
import { useState } from "react";
import styles from "./page.module.css";

const POKEMONS = [
  { id: 1, name: "bulbasaur", type: ["grass", "poison"] },
  { id: 2, name: "ivysaur", type: ["grass", "poison"] },
  { id: 3, name: "venusaur", type: ["poison"] },
  { id: 4, name: "charmander", type: ["fire"] },
  { id: 5, name: "charmeleon", type: ["fire"] },
  { id: 6, name: "charizard", type: ["fire"] },
  { id: 7, name: "squirtle", type: ["water"] },
  { id: 8, name: "wartortle", type: ["water"] },
  { id: 9, name: "blastoise", type: ["water"] },
];

export default function Home() {
  const [pokemons, setPokemons] = useState(POKEMONS);

  const filterPokemons = (searchInput: string) => {
    const filtered = POKEMONS.filter((pokemon) => {
      // Check if the name includes the search input
      const nameMatch = pokemon.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      // Check if any type includes the search input
      const typeMatch = pokemon.type.some((type) =>
        type.toLowerCase().includes(searchInput.toLowerCase())
      );
      // Return true if either name or type matches the search input
      return nameMatch || typeMatch;
    });
    return setPokemons(filtered);
  };

  return (
    <main className={styles.main}>
      <h1>POKEMON</h1>
      <form className={styles.form}>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search pokemon by name or type"
            style={{ padding: "0.5rem", width: "100%" }}
            onChange={(e) => filterPokemons(e.target.value)}
          />
        </div>
      </form>
      <table width="300px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons?.map(({ id, name, type }) => (
            <tr key={id}>
              <td style={{ textAlign: "center" }}>{id}</td>
              <td style={{ textAlign: "center" }}>{name}</td>
              <td style={{ textAlign: "center" }}>{type?.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
