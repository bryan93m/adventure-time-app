import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';

function Home({characters}) {
    

    return (
        <div className="row">
            <div className="column">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;