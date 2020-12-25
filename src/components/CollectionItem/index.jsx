import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import CustomButton from 'components/form-control/CustomButton';

CollectionItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

function CollectionItem({ id, imageUrl, name, price }) {
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted> Add to cart </CustomButton>
        </div>
    );
}

export default CollectionItem;
