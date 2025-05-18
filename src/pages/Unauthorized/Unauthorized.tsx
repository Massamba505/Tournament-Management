import MainLayout from "../../components/Layouts/MainLayout";

function Unauthorized() {
  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-600 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">403 - Unauthorized</h1>
          <p className="text-2xl mb-6">You do not have access to this page.</p>
          <a
            href="/"
            className="bg-[#142d4c] text-white px-6 py-2 rounded-lg text-xl font-semibold"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default Unauthorized;
