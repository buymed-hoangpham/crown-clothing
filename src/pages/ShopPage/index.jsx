import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';
import SHOP_DATA from './shop-data';
import CollectionPreview from 'components/CollectionPreview';

ShopPage.propTypes = {};

function ShopPage(props) {
    const [collections] = useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default ShopPage;
