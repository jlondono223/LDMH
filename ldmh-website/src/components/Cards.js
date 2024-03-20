import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these LOVELY Styles!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfalls of the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Travel through the Island of Bali in a private cruise'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
