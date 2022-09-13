import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';


function Home({characters}) {
    

    return (
        <div className="homepage">
                <div className='homepage__list'>
                    {characters.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>          
            <Footer className='footer__component' />
        </div>
    );
}

export default Home;