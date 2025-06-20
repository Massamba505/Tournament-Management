import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import type { RegisterRequest } from "../../../types/auth";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";

function RegisterForm() {
  const { register, loading, user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleId: 1,
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleStepOneSubmit = () => {
    const { name, surname, email, password, confirmPassword } = formData;
    if (!name || !surname || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async () => {
    if (!formData.roleId) {
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
          selectedRole={formData.roleId}
          setSelectedRole={(roleId: number) =>
            setFormData({ ...formData, roleId })
          }
          onSubmit={handleFinalSubmit}
          loading={loading}
        />
      )}
    </div>
  );
}

export default RegisterForm;
