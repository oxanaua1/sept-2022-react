const Character = ({character}) => {

    return (
        <div>

            <div>name: {character.name}</div>
            <div>status: {character.status}</div>
            <div>species: {character.species}</div>
            <img src={character.image} alt={character.name}/>


        </div>
    );
};

export {Character};