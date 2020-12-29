import MenuItem from 'components/MenuItem';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from 'redux/directory/directorySelectors';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';
import './styles.scss';

Directory.propTypes = {};

function Directory({ sections }) {
    return (
        <div className="directory-menu">
            {sections.map((section) => (
                <MenuItem key={section.id} section={section} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
