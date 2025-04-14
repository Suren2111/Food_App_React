const OfflineNotice = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800">No Internet</h2>
        <p className="text-lg text-gray-600">Try:</p>
        <ul className="text-md text-gray-600 list-disc pl-6">
          <li>Checking the network cables, modem, and router</li>
          <li>Reconnecting to Wi-Fi</li>
          <li>Running Windows Network Diagnostics</li>
        </ul>
        <p className="text-red-500 font-semibold mt-4">ERR_INTERNET_DISCONNECTED</p>
      </div>
    );
  };
  
  export default OfflineNotice;
  