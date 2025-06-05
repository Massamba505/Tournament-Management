import MainLayout from "../../components/Layouts/MainLayout";
import Hero from "./components/Hero";

function LandingPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white text-black">
        <Hero />
      </div>
    </MainLayout>
  );
}

export default LandingPage;
