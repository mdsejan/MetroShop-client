import PaymentMethod from "@/components/PaymentMethod";
import ShipingBilling from "@/components/ShipingBilling";
import Head from "next/head";

const cartItems = [
  { id: 1, name: "Product A", price: 30, quantity: 1 },
  { id: 2, name: "Product B", price: 20, quantity: 2 }
];

const CheckoutPage = () => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Head>
        <title>Checkout - Your Store Name</title>
        <meta
          name="description"
          content="Secure checkout page for your purchases."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col w-full max-w-2xl mx-auto p-6 space-y-8">
        {/* Shipping and Billing Form */}
        <ShipingBilling />

        {/* Payment Method Form */}
        <PaymentMethod />

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-md space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-semibold pt-4 border-t">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button
            type="button"
            className="w-full mt-6 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Process Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
