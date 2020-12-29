import CollectionOverview from 'components/CollectionOverview';
import CollectionPage from 'pages/CollectionPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';

ShopPage.propTypes = {};

function ShopPage({ match }) {
    return (
        <Switch>
            <Route exact path={match.path} component={CollectionOverview} />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </Switch>
    );
}

export default ShopPage;
