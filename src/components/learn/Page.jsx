import React from 'react';
import CardContainer from './CardContainer';

const cardsData = [
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'This is the description for card 1.',
      progress: 70
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'This is the description for card 2.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'This is the description for card 3.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 4',
      description: 'This is the description for card 4.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 5',
      description: 'This is the description for card 5.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 6',
      description: 'This is the description for card 6.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 7',
      description: 'This is the description for card 7.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 8',
      description: 'This is the description for card 8.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 9',
      description: 'This is the description for card 9.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 10',
      description: 'This is the description for card 10.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 11',
      description: 'This is the description for card 11.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 12',
      description: 'This is the description for card 12.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 13',
      description: 'This is the description for card 13.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 14',
      description: 'This is the description for card 14.'
  },
  {
      image: 'https://via.placeholder.com/150',
      title: 'Card 15',
      description: 'This is the description for card 15.'
  },
];

const Page = () => {
  return (
    <div className="App">
            <header className="App-header">
                
            </header>
            <CardContainer cards={cardsData} />
        </div>
  );
}

export default Page;
