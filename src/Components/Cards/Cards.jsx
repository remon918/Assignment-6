import React, { use } from 'react';

const Cards = ({cardsPromise}) => {
    // console.log(cardsPromise);
    const cardData = use(cardsPromise);
    console.log(cardData);
    return (
        <div>
            Card : {cardData.length}
        </div>
    );
};

export default Cards;