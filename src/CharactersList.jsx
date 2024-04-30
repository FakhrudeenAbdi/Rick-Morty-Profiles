
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


// const CharactersList = () => {
//   const [characters, setCharacters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then((response) => response.json())
//       .then((data) => setCharacters(data.results))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredCharacters = characters.filter((character) =>
//     character.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container characters-list">
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {filteredCharacters.map((character) => (
//           <li key={character.id}>
//             <Link to={`/character/${character.id}`}>{character.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CharactersList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CharactersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setFilteredCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = filteredCharacters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="container characters-list">
      
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default CharactersList;
