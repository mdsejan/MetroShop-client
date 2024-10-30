const PaymentMethod = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
      <form className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            id="creditCard"
            className="w-4 h-4"
            required
          />
          <label htmlFor="creditCard" className="text-gray-700">
            Credit Card
          </label>
        </div>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            id="paypal"
            className="w-4 h-4"
          />
          <label htmlFor="paypal" className="text-gray-700">
            PayPal
          </label>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
