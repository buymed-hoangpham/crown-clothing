import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

// HOC loading spinner
const Spinner = () => (
    <SpinnerContainer>
        <SpinnerOverlay />
    </SpinnerContainer>
);

export default Spinner;
