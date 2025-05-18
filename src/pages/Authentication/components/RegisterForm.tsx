import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Users, ShieldCheck } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import type { Roles } from "../../../types";

function RegisterForm() {
  const { register, loading } = useAuthContext();
  const navigate = useNavigate();

  // Step 1: User input
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Role selection
  const [selectedRole, setSelectedRole] = useState<Roles>("Organiser");

  const handleFirstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !surname || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async () => {
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }

    try {
      await register({ name, surname, email, password, role: selectedRole });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Signup failed");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg border border-gray-100">
      {step === 1 && (
        <>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">Let’s get you started!</p>
          </div>
          <form onSubmit={handleFirstSubmit} className="space-y-4">
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Surname
              </label>
              <input
                id="surname"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142d4c]"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Select Your Role
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              How do you want to use the platform?
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div
              onClick={() => setSelectedRole("Organiser")}
              className={`cursor-pointer p-5 border rounded-lg transition shadow-sm ${
                selectedRole === "Organiser"
                  ? "border-[#142d4c] bg-[#f0f4f8]"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-[#142d4c]" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    Tournament Organizer
                  </h4>
                  <p className="text-sm text-gray-500">Create tournaments</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setSelectedRole("General")}
              className={`cursor-pointer p-5 border rounded-lg transition shadow-sm ${
                selectedRole === "General"
                  ? "border-[#142d4c] bg-[#f0f4f8]"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-[#142d4c]" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    Member
                  </h4>
                  <p className="text-sm text-gray-500">
                    Create a team or join a team, participate in tournaments,
                    and track results.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleFinalSubmit}
              disabled={loading}
              className="w-full mt-4 bg-[#142d4c] hover:bg-[#1f3c5e] text-white font-semibold py-2.5 rounded-md transition disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default RegisterForm;
