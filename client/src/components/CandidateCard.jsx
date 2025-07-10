import axios from "../axiosConfig";

const CandidateCard = ({ candidate, onStatusChange }) => {
    const handleStatusUpdate = async (e) => {
        try {
            await axios.put(`/candidates/${candidate._id}/status`, {
                status: e.target.value,
            });
            onStatusChange(); // refresh list
        } catch (error) {
            console.error("Status update failed", error);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'Reviewed': return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Hired': return 'bg-green-100 text-green-800 border-green-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-4">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{candidate.name}</h3>
                    <p className="text-gray-600 mb-1">
                        <span className="font-medium">Job Title:</span> {candidate.jobTitle}
                    </p>
                </div>

                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(candidate.status)}`}>
                    {candidate.status}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Update Status:
                    </label>
                    <select
                        value={candidate.status}
                        onChange={handleStatusUpdate}
                        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 bg-white"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Hired">Hired</option>
                    </select>
                </div>

                {candidate.resume && (
                    <div className="flex-shrink-0">
                        <a
                            href={` https://candidate-referal.onrender.com${candidate.resume}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Resume
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidateCard;