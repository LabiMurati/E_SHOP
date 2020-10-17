import React from 'react'

//Components
import { PageBanner } from '../../components/PageBanner/PageBanner'
import { ProductBox, ProductBoxProps } from '../../components/ProductBox/ProductBox'

//styles
import './Home.scss'
import homeBanner from './../../assets/images/home_banner.jpg'

const products: ProductBoxProps[] = [
    {
        id:1,
        title: 'Product 1',
        image: homeBanner,
        price: "12.99"
    },
    {
        id:2,
        title: 'Product 2',
        image: homeBanner,
        price: "19.99"
    },
    {
        id:3,
        title: 'Product 3',
        image: homeBanner,
        price: "22.99",
        description:'Lorem ipsum...'
    }
]

export const Home = () => {
    return (
        <div className="Home">
            <section className="block_section">
                <PageBanner>
                    <img src={homeBanner} alt="Home Banner"/>
                </PageBanner>              
            </section>
            <section className="block_section">
                <div className="container">
                    <div className="row has_gutter">
                        {products.map((product:ProductBoxProps) => {
                            return (
                                <div className="column-4" key={product.id}>
                                    <ProductBox
                                        id={product.id}
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                        description={product.description}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
