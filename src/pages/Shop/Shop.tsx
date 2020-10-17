import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import * as API from './../../api/api';

//styles
import './Shop.scss';


export interface StateProps {
    loading: boolean;
    beers?: API.Beer[],
    error?: string;
}

export const Shop = () => {
    const [state, setState] = useState<StateProps>({
        loading: true,
        beers: [],
        error: undefined
    })

    useEffect(() => {
        loadBeers();
    }, [])

    const loadBeers = async () => {
        try {
            const res = await API.getBeers({
                per_page: 9,
                page: 1
            })
            setState({
                ...state,
                loading: false,
                beers: res.data
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }
    }

    return (
        <div className="Shop">
            <div className="container">
                <h1>Shop</h1>
                {state.loading && <p>Loading...</p>}
                {state.error && <p>{state.error}</p>}
                <div className="row has_gutter">
                    {state.beers?.map((beer: API.Beer) => {
                        return (
                            <div className="column-4" key={beer.id}>
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        height="300px"
                                        className="beer__image"
                                        alt={beer.name}
                                        src={beer.image_url}
                                    />
                                    <CardBody>
                                        <CardTitle>{beer.name}</CardTitle>
                                        <CardSubtitle>{beer.abv}</CardSubtitle>
                                        <CardText>{beer.description}</CardText>
                                        <Link to={`/product/${beer.id}`}>See more</Link>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
