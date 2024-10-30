const ShipingBilling = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">
        Shipping & Billing Details
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </form>
    </div>
  );
};

export default ShipingBilling;
