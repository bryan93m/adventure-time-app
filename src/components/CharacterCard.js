import React from 'react';

function CharacterCard({character}) {
    const quotes = character.quotes

    return (
        <div className="card">
            <h3 className='card-header-title'>{character.displayName}</h3>
            <img src={character.sprite} alt={character.displayName}/>
            <p className="information">Full Name:</p><span className="charInfo">{character.fullName}</span>
            <p className="information">Species:</p><span className="charInfo">{character.species}</span>
            <p className="information">Sex:</p><span className="charInfo">{character.sex}</span>
            {quotes.map(quote => <p key={quote}>{quote}</p>)}
            
        </div>
    );
}

export default CharacterCard;