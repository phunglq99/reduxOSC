import React, { useState } from 'react'

function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse" ];
    
    return animals[Math.floor(Math.random()  * animals.length)];
}

const App = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    return (
        <>
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>
        </>
    )
}

export default App