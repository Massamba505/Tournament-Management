import React from "react";
import type { RegisterRequest } from "../../../types";

interface Props {
  data: RegisterRequest;
  onChange: (data: any) => void;
  onContinue: () => void;
}

const RegisterStepOne: React.FC<Props> = ({ data, onChange, onContinue }) => {
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onContinue();
        }}
        className="space-y-4"
      >
        {["name", "surname", "email", "password"].map((field) => (
          <div key={field}>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor={field}
            >
              {field === "surname"
                ? "Last Name"
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={field}
              type={
                field === "email"
                  ? "email"
                  : field === "password"
                  ? "password"
                  : "text"
              }
              value={data[field as keyof typeof data]}
              onChange={(e) => onChange({ ...data, [field]: e.target.value })}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
            />
          </div>
        ))}

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
