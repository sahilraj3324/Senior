import React from 'react'
import CardComponent from './CardComponent';

const CardContainer = ( {cards }) => {
    const rows = [];

    // Split cards into rows with 4 cards each
    for (let i = 0; i < cards.length; i +=4) {
        rows.push(cards.slice(i, i + 4));
    }
  return (
    <div className="container mt-5">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row mb-4">
                    {row.map((card, cardIndex) => (
                        <div key={cardIndex} className="col-md-3">
                            <CardComponent
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
  )
}

export default CardContainer
