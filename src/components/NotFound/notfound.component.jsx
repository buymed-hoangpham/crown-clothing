import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.styles.scss';

NotFound.propTypes = {};

function NotFound(props) {
    return (
        <div className="main-box">
            <div className="err">404</div>
            <div className="msg">
                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                Never existed in the first place?
                <p>
                    Let's go{' '}
                    <Link className="link" to="/">
                        home
                    </Link>{' '}
                    and try from there.
                </p>
            </div>
        </div>
    );
}

export default NotFound;
