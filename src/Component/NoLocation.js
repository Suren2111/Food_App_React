const NoLocation = ({ onBackToHome }) => {
    return (
        <div className="p-32 text-center text-lg font-bold pt-64">
            <p>We're sorry, but Swiggy's services are not available in your area.</p>
            <button onClick={onBackToHome} className="bg-orange-500 rounded-lg p-3">
                Back To Home
            </button>
        </div>
    );
};


export default NoLocation;