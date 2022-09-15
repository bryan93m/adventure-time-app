import React, {useState} from "react"
import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';


function Home({characters}) {
    const [sortBy, setSortBy] = useState(true)

    function changeFilter(e){
        if(e.target.checked){
            setSortBy(characters.sort((a, b) => {
                let x = a.displayName.toLowerCase();
                let y = b.displayName.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            }))
        }
    }

    return (
        <>
        <div className="homepage">
            <div className="checkbox">
                <label>Filter by name: <input type="checkbox" onClick={(e) => changeFilter(e)}/></label>
            </div>  
            <div className='homepage__list'>    
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>          
        </div>
        <Footer className='footer__component' />
        </>
    );
}

export default Home;