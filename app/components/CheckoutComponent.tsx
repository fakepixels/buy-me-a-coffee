import { Checkout, CheckoutButton, CheckoutStatus } from '@coinbase/onchainkit/checkout';

export default function CheckoutComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
        <Checkout productId='88605f30-e618-4a14-8342-70ae9046e79e' > 
            <CheckoutButton coinbaseBranded /> 
            <CheckoutStatus className="text-center" />
        </Checkout>
        </div>
    )
}
