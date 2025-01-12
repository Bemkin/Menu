import React, { Component } from 'react';


class Card extends Component {
    render() {
        const { className, imgClassName, titlePriceClassName, descClassName, img, name, price, description } = this.props;
        return (
            <div className={`single-food ${className}`}>
                <div className={`img ${imgClassName}`}>
                    <img src={img} alt={name} />
                </div>
                <div className={`title-price ${titlePriceClassName}`}>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div className={`food-desc ${descClassName}`}>
                    {description}
                </div>
            </div>
        );
    }
}

export default Card;
