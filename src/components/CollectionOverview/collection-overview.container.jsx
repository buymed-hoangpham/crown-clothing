import WithSpinner from 'components/with-spinner';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsFetching } from 'redux/shop/shopSelectors';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '.';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
