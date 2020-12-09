import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

MenuItem.propTypes = {
    section: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
};

function MenuItem({ section }) {
    return (
        <div className={`menu-item ${section.size}`}>
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

export default MenuItem;
