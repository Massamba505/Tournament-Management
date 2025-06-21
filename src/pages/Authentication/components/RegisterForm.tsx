import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import { Roles } from "../../../constants/roles";
import type { RegisterRequest } from "../../../types/auth";

function RegisterForm() {
  const { register, loading } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: Roles.Organizer,
  });

  const handleStepOneSubmit = () => {
    const { name, surname, email, password } = formData;
    if (!name || !surname || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async () => {
    if (!formData.role) {
      toast.error("Please select a role");
      return;
    }
    try {
      await register(formData);
    } catch (err: any) {
      toast.error(err.message);
      setStep(1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      {step === 1 ? (
        <RegisterStepOne
          data={formData}
          onChange={setFormData}
          onContinue={handleStepOneSubmit}
        />
      ) : (
        <RegisterStepTwo
          selectedRole={formData.role}
          setSelectedRole={(role: Roles) => setFormData({ ...formData, role })}
          onSubmit={handleFinalSubmit}
          loading={loading}
        />
      )}
    </div>
  );
}

export default RegisterForm;
