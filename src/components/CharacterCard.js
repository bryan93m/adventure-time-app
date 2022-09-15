import React, {useState} from 'react';

function CharacterCard({character, createComment}) {
    const commentData = {
        name: "",
        comment: "",
    }

    const [toggleQuotes, setToggleQuotes] = useState(false)
    const [toggleComments, setToggleComments] = useState(false)
    const [formData, setFormData] = useState(commentData)

    const quotes = character.quotes

    function handleToggle(){
        setToggleQuotes(!toggleQuotes)
    }

    function handleCommentToggle(){
        setToggleComments(!toggleComments)
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        createComment({
            name: formData.name,
            comment: formData.comment,
        }, character)
        setFormData(commentData)
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
                    <button className="toggle-button" onClick={handleCommentToggle}>Click to see comments</button>
                </div>
                <div> 
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
                    {toggleComments ? (
                        <div>
                            {character.comments ? (character.comments.map(comment => <div key={comment.name}><p>Name: {comment.name}</p><p>Comment: {comment.comment}</p></div>)) : null}
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text"
                                    placeholder="Enter your name..."
                                    name="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type="text"
                                    placeholder="Enter your comment..."
                                    name="comment"
                                    onChange={handleChange}
                                    value={formData.comment}
                                />
                                <button className="toggle-button" type="submit">Submit Comment</button>
                            </form>
                        </div>)
                        :
                        ( null )
                    } 
                </div>   
        </div>
    );
}

export default CharacterCard;