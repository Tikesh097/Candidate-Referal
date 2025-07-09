const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center p-5 font-sans">
            <div className="bg-white p-10 md:p-15 rounded-3xl shadow-2xl text-center max-w-2xl w-full">
                <div className="text-8xl md:text-9xl font-bold text-gray-300 mb-4">
                    404
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    Page Not Found
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Sorry, the page you're looking for doesn't exist.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Go Home
                    </button>

                    <button className="bg-transparent hover:bg-red-500 text-red-500 hover:text-white px-8 py-3 rounded-lg font-medium border-2 border-red-500 transition-all duration-300 hover:-translate-y-1">
                        Go Back
                    </button>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    <p>Lost? Try checking the URL or navigate back to safety.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;