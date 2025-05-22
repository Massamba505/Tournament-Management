import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";

function LoginForm() {
  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-500 mt-1">
          Login to your account to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <InputField
          label="Email address"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="email@gmail.com"
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
          extraLink={{
            href: "#",
            text: "Forgot password?",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#142d4c] hover:bg-[#1f3c5e] text-white font-semibold py-2.5 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-[#5585b5] hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  extraLink?: {
    href: string;
    text: string;
  };
}

function InputField({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  extraLink,
}: InputFieldProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {extraLink && (
          <a
            href={extraLink.href}
            className="text-sm text-[#5585b5] hover:underline"
          >
            {extraLink.text}
          </a>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#142d4c] focus:border-transparent"
      />
    </div>
  );
}

export default LoginForm;
