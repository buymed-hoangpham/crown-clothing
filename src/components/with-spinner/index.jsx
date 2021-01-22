import Spinner from 'components/Spinner/spinner.component';
import React from 'react';

// HOC loading spinner
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
export default WithSpinner;
