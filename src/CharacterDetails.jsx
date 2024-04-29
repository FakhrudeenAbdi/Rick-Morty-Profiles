
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!character) return <div className="container character-details">Loading...</div>;

  return (
    <div className="container character-details">
      <div className="character-card">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
      </div>
    </div>
    
  );
};

export default CharacterDetails;
