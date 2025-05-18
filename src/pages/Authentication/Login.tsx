import MainLayout from "../../components/Layouts/MainLayout";
import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <MainLayout showFooter={false} showNav={false}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
        <LoginForm />
      </div>
    </MainLayout>
  );
}

export default Login;
