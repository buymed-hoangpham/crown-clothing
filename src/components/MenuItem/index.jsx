import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

MenuItem.propTypes = {
    section: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        linkUrl: PropTypes.string.isRequired,
    }),
};

function MenuItem({ section, match, history }) {
    return (
        <div
            className={`menu-item ${section.size}`}
            // onClick={() => history.push(`${match.url}${section.linkUrl}`)}
        >
            <div
                className="background-img"
                style={{ backgroundImage: `url(${section.imageUrl})` }}
            ></div>
            <div className="content">
                <h1 className="title">{section.title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
