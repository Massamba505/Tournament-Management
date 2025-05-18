import MainLayout from "../../components/Layouts/MainLayout";
import RegisterForm from "./components/RegisterForm";

function Register() {
  return (
    <MainLayout showFooter={false} showNav={false}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
        <RegisterForm />
      </div>
    </MainLayout>
  );
}

export default Register;
