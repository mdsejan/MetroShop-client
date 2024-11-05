"use client";

import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { setUser } from "@/redux/features/auth/authSlice";

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleLogin = async () => {
    const toastId = toast.loading("Logging in...");

    // Static credentials
    const email = "abir@gmail.com";
    const password = "abir1234";

    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setUser({ token: response.token }));
      toast.success("Logged In Successfully", { id: toastId, duration: 2000 });

      const redirectTo = searchParams.get("redirect") || "/";
      router.push(redirectTo);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Login failed. Please try again.", {
          id: toastId,
          duration: 2000
        });
      } else {
        toast.error("An unexpected error occurred.", {
          id: toastId,
          duration: 2000
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Log In with Static Credentials
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
