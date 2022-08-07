import React from 'react';
import s from './ShopItemFunc.module.css';
import PropTypes from 'prop-types';

const ShopItemFunc = (props) => {
    const { item } = props;

    return (
        <div className={s.mainContent}>
            <h2> {item.brand} </h2>
            <h1> {item.title} </h1>
            <h3> {item.description} </h3>
            <div className={s.description}>
                {item.descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className={s.divider}></div>
            <div className={s.purchaseInfo}>
                <div className={s.price}>
                    {item.currency}{Number(item.price).toFixed(2)}
                </div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }),
};

export default ShopItemFunc;