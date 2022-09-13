import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';

function Home({characters}) {
    

    return (
        <div className="row">
            <div className="column">
                <div>
                    {characters.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;