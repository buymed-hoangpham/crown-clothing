import CustomButton from 'components/form-control/CustomButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/cartActions';
import './styles.scss';

CollectionItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

function CollectionItem({ item, addItem }) {
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                Add to cart
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
