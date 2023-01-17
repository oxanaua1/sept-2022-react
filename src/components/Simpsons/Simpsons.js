import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            img: 'https://static.tvtropes.org/pmwiki/pub/images/homer2.png'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            img: 'https://static.tvtropes.org/pmwiki/pub/images/marge_simpson_0.png'
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            img: 'https://static.tvtropes.org/pmwiki/pub/images/bart_simpson_2.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            img: 'https://static.tvtropes.org/pmwiki/pub/images/lisa_simpson.png'
        }

    ]

    return (
        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};