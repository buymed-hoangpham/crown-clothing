import React from 'react';
import CollectionPreview from 'components/CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from 'redux/shop/shopSelectors';
import './styles.scss';

CollectionOverview.propTypes = {};

function CollectionOverview({ collections }) {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
