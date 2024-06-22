import React from 'react';
import { LineSeparator } from '../extras/LineSeparator';
import { AddToCard } from '../../hooks/AddToCard';

interface PizzaProps {
    id: number;
    name: string;
    cost: number;
    desc: string;
    type: string;
    image: string;
}

export const SinglePizza = ({...props} : PizzaProps) => {
    const CardData = {
        id: props.id,
        name: props.name,
        cost: props.cost,
    };

    return (
        <div className="d-flex single-pizza">
            <div className="single-pizza__image position-relative">
                <img src={props.image} alt={`Image of ${props.name} pizza`} />
                <span className="cost position-absolute">{props.cost}<small>zł</small></span>
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