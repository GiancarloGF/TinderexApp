import React, { useState } from 'react';
import styles from './Cards.module.css';
import TinderCard from 'react-tinder-card'

const people_data = [
    {
        name: 'Cristiano Ronaldo',
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/juventus-player-cristiano-ronaldo-poses-for-a-photo-during-news-photo-1590741989.jpg?crop=0.66667xw:1xh;center,top&resize=640:*'
    },
    {
        name: 'Leonel Messi',
        url: 'http://modelofm.com/wp-content/uploads/2020/12/https-_specials-images.for1564.jpg'
    },
    {
        name: 'Neymar',
        url: 'https://media.tycsports.com/files/2021/11/18/360669/neymar_416x234.jpg?v=1'
    },
    {
        name: 'Paolo Guerrero',
        url: 'https://e.rpp-noticias.io/normal/2019/04/01/271527_772790.jpg'
    },

];

function Cards() {
    const [people, setPeople] = useState(people_data);
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
                        <div style={{ backgroundImage: `url(${person.url})` }} className={styles.card}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default Cards;
