import Directory from 'components/Directory';
import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

HomePage.propTypes = {};

function HomePage(props) {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}

export default HomePage;
