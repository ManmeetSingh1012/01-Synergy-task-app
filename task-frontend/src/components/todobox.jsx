import axios from "axios";
export default function Todobox({ status, data , deletetodo}) {


  

  




return (
  <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-start max-w-xs mb-3">
    <div className="flex-grow">
      <h3 className="font-normal text-base break-words">{data}</h3>
      <div className="mt-2 flex space-x-2">
        <span className="bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">{`${status}`}</span>

      </div>
    </div>
    <button onClick={deletetodo} className="text-gray-400 hover:text-gray-600 ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);
   

}