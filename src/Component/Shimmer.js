const Shimmer=() =>{
    return(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-32">
  {Array(16).fill(0).map((_, i) => (
    <div key={i} className="w-80 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      <div className="mt-4 h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  ))}
</div>


    )
}

export default Shimmer;