import MenuItem from 'components/MenuItem';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

Directory.propTypes = {};

function Directory(props) {
    const [sections] = useState([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            size: 'medium',
            linkUrl: 'hats',
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            size: 'medium',
            linkUrl: '',
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            size: 'medium',
            linkUrl: '',
        },
        {
            title: 'women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: '',
        },
        {
            title: 'men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: '',
        },
    ]);
    return (
        <div className="directory-menu">
            {sections.map((section) => (
                <MenuItem key={section.id} section={section} />
            ))}
        </div>
    );
}

export default Directory;
