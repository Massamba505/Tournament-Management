import React from "react";
import type { RegisterRequest } from "../../../types/auth";

interface Props {
  data: RegisterRequest;
  onChange: (data: RegisterRequest) => void;
  onContinue: () => void;
}

const RegisterStepOne: React.FC<Props> = ({ data, onChange, onContinue }) => {
  const handleChange = (field: keyof RegisterRequest, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Start organizing or joining tournaments.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
          />
        </div>

        <div>
          <label
            htmlFor="surname"
            className="text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="surname"
            type="text"
            value={data.surname}
            onChange={(e) => handleChange("surname", e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#142d4c] hover:bg-[#1f3c5e] text-white font-semibold py-2.5 rounded-md transition"
        >
          Continue
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#142d4c] font-medium hover:underline"
          >
            Log in here
          </a>
        </p>
      </form>
    </>
  );
};

export default RegisterStepOne;
