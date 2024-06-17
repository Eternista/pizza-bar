import React, { useState } from 'react';
import { LineSeparator } from '../extras/LineSeparator';
import { AddToCard } from '../../hooks/AddToCard';

interface PizzaProps {
    id: number;
    name: string;
    desc: string;
    type: string;
    image: string;
}

export const SinglePizza = ({...props} : PizzaProps) => {
    const [CardData, setCardData] = useState({
        id: props.id,
        name: props.name,
    });

    return (
        <div className="d-flex single-pizza">
            <div className="single-pizza__image">
                <img src={props.image} alt={`Image of ${props.name} pizza`} />
                <span className="limit">Limit</span>
            </div>
            <div className="single-pizza__text">
                <h3 className="h3">{props.name} - <small>{props.type}</small></h3>
                <LineSeparator lineColor='main'/>
                <p className="desc">{props.desc}</p>
                <button className='btn btn-primary' onClick={() => {AddToCard(CardData)}}>Add To Cart</button>
            </div>
        </div>
    );
}