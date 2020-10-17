import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";
import * as API from './../../api/api';

import './Product.scss'

interface Props extends RouteComponentProps { }

interface ParamsProps {
    id?: number
}

interface StateProps {
    loading: boolean;
    beer?: API.Beer;
    error?: string;
}

export const Product = (props: Props) => {
    const { id }: ParamsProps = props?.match?.params;
    const [state, setState] = useState<StateProps>({
        loading: true,
        beer: undefined,
        error: undefined
    });

    useEffect(() => {
        loadBeer();
    }, [])

    const loadBeer = async () => {
        try {
            if (!id) {
                return;
            }
            const res = await API.getBeer(id)
            setState({
                ...state,
                loading: false,
                beer: res.data && res.data[0]
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
        <div className="Product">
            <div className="container">
                <div className="row has_gutter">
                    <div className="column-6">
                        <h1>{state.beer?.name}</h1>
                        <span>{state.beer?.abv}</span>
                        <p>{state.beer?.description}</p>

                    </div>
                    <div className="column-6">
                        <img src={state.beer?.image_url} alt={state.beer?.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}
