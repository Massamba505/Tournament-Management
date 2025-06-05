import { Logo, SoccerField } from "../../assets";
import MainLayout from "../../components/Layouts/MainLayout";
import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <MainLayout showFooter={false} showNav={false}>
      <div className="flex flex-col items-center justify-center">
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={SoccerField}
              alt="Football stadium"
              className="object-cover w-full h-full brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <LoginForm />

              <div className="relative flex justify-center">
                <div className="bg-white/5 w-10/12 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-2xl">
                  <img src={Logo} alt="Logo" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Login;
