import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from 'components/CollectionItem';
import './styles.scss';
import { withRouter } from 'react-router-dom';

CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

function CollectionPreview({ title, items, history, match }) {
    return (
        <div className="collection-preview">
            <h1
                className="title"
                onClick={() =>
                    history.push(`${match.path}/${title.toLowerCase()}`)
                }
            >
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);
