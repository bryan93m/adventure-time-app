import React, {useState, useEffect} from 'react';
import axios from "axios"
import Footer from './Footer';
import CharacterCard from './CharacterCard';

function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/characters")
            .then(response => setCharacters(response.data))
    }, [])

    return (
        <div className="row">
            <div className="column">
                {characters.map(character => 
                    <div className="card" key={character.id}>
                        <CharacterCard key={character.id} character={character}/>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;