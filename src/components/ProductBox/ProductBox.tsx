import React from 'react';
import {Link} from "react-router-dom";

import './ProductBox.scss';

export interface ProductBoxProps {
    id: number;
    title: string;
    image: string;
    price: string;
    description?: string;
}

export const ProductBox = (props: ProductBoxProps) => {
    return (
        <div className="ProductBox">
            <Link to={`/product/${props.id}`}>
                <div className="ProductBox__thumb">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="ProductBox__content">
                    <h3>{props.title}</h3>
                    {props.description &&
                        <p>{props.description}</p>
                    }
                    {/* {props.description ?
                        <p>{props.description}</p>
                        :
                        null
                    } */}
                    <span>{props.price}</span>
                </div>
            </Link>
        </div>
    )
}
