import React from 'react';

function CharacterCard({character}) {
    const quotes = character.quotes

    return (
        <div>
            <h3>{character.displayName}</h3>
            <img src={character.sprite} alt={character.displayName}/>
            <p>Full Name: {character.fullName}</p>
            <p>Species: {character.species}</p>
            <p>Sex: {character.sex}</p>
            {quotes.map(quote => <p key={quote}>{quote}</p>)}
            
        </div>
    );
}

export default CharacterCard;