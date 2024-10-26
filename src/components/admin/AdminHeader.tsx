const AdminHeader = () => {
  return (
    <header className="hidden lg:flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center space-x-4">
        <span>Hello, Admin</span>
        {/* <img
              src="/profile.jpg"
              alt="Admin Profile"
              className="w-8 h-8 rounded-full border"
            /> */}
      </div>
    </header>
  );
};

export default AdminHeader;
