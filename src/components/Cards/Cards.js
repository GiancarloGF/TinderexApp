import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';
import TinderCard from 'react-tinder-card'
import axios from '../../services/axios.js';
 


function Cards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("/api/cards");
            setPeople(res.data);
        }

        fetchData();

    }, []);

    console.log(people)
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className={styles.cards}>
            <div className={styles.cardContainer}>
                {people.map((person) => (
                    <TinderCard
                        className={styles.swipe}
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => onSwipe(dir, person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.img_url})` }} className={styles.card}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default Cards;
