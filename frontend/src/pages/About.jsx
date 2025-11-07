import Navbar from "../components/Navbar";

function About() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">

      <Navbar />
      <div className="flex flex-col justify-center items-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">About Foundation360</h1>
        <p className="text-gray-200 max-w-2xl text-lg">
          Foundation360 Infratech (F360 Inf.) is your trusted platform that connects 
          homeowners, engineers, and contractors to make construction projects simple, 
          transparent, and efficient. <br /> 
          <span className="text-blue-300 font-semibold">"Sapno ka Ghar, Ab Experts ke Sath"</span>
        </p>
      </div>
    </div>
  );
}

export default About;
