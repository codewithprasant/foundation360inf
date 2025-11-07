import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[80vh] text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Welcome to <span className="text-blue-400">Foundation360</span> 🏗️
        </h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Sapno ka Ghar, Ab Experts ke Sath
        </p>
      </div>
    </div>
  );
}

export default Home;
