import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

StripeCheckoutButton.propTypes = {};

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51I3eCDJfFQ66d8nmZtdkUWhRklIdk8tWvW8KcCLljOGaWnKeJOJhug8Uytgy9e6VxWUu39ojAuIg5CPRxqX0vqf500uf49htIZ';
    const onToken = (token) => {
        console.log(token);
        alert('Payment successfully!!!');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
