import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5 font-sans">
      <div className="bg-white p-10 md:p-15 rounded-2xl shadow-xl border border-slate-200 text-center max-w-2xl w-full">
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-5">
            Welcome to the Candidate Referral System
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Use the navigation to refer candidates or view the dashboard.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/refer">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Refer Candidate
            </button>
          </Link>

          <Link to="/dashboard">
            <button className="bg-white hover:bg-blue-50 text-blue-900 hover:text-blue-700 px-8 py-3 rounded-lg font-semibold border-2 border-blue-900 hover:border-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              View Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;