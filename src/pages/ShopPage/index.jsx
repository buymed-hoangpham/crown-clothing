import CollectionOverviewContainer from 'components/CollectionOverview/collection-overview.container';
import CollectionPageContainer from 'pages/CollectionPage/collection-page.container';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCollectionsStart } from 'redux/shop/shopActions';
import './styles.scss';

const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <Switch>
            <Route
                exact
                path={match.path}
                component={CollectionOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </Switch>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
