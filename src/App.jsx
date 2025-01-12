import React from 'react';
import Card from './components/Card/Card';
import './App.css';
import './index.css'
import menu from '../../Res/data.js';

function App() {
    return (
        <>
            <header className="title">
                <h1>Habesha Menu</h1>
                <div>
                    {menu.map(item => (
                        <Card
                            key={item.id}
                            className="custom-food-class"
                            imgClassName="custom-img-class"
                            titlePriceClassName="custom-title-price-class"
                            descClassName="custom-desc-class"
                            img={item.img}
                            name={item.title}
                            price={`$${item.price.toFixed(2)}`}
                            description={item.desc}
                        />
                    ))}
                </div>
            </header>
        </>
    );
}

export default App;
