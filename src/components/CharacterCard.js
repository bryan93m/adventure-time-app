import React, {useState} from 'react';

function CharacterCard({character}) {
    const [toggleQuotes, setToggleQuotes] = useState(false)

    const quotes = character.quotes

    function handleToggle(){
        setToggleQuotes(!toggleQuotes)
    }

    return (
        <div className="card">
                <div className="card-left">
                    <img src={character.sprite} alt={character.displayName}/>
                </div>
                <div className="card-right">
                    <h3 className='card-header-title'>{character.displayName}</h3>
                    <p className="information">FULL NAME:</p><span className="charInfo">{character.fullName}</span>
                    <p className="information">SPECIES:</p><span className="charInfo">{character.species}</span>
                    <p className="information">SEX:</p><span className="charInfo">{character.sex}</span>
                </div>
                <div className="card-center">
                    <button className="toggle-button" onClick={handleToggle}>Click to see quotes</button>
                    {toggleQuotes ? (
                            <div>
                                <p className="information">QUOTES:</p>
                                <div className='quoteSection'>
                                    {quotes.map(quote => <p className="quotes" key={quote}>{quote}</p>)}
                                </div>
                            </div>) 
                            : 
                            ( null )
                        }
                </div>
        </div>
    );
}

export default CharacterCard;