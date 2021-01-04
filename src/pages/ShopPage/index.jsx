import CollectionOverview from 'components/CollectionOverview';
import WithSpinner from 'components/with-spinner';
import CollectionPage from 'pages/CollectionPage';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { updateCollections } from 'redux/shop/shopActions';
import {
    convertCollectionsSnapshotToMap,
    firestore,
} from '../../firebase/firebase.utils';
import './styles.scss';

// HOC loading spinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then((snapshot) => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <Switch>
                <Route
                    exact
                    path={match.path}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </Switch>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
