import { useState } from "react";
export default function Documentation() {

   const [isOpen, setIsOpen] = useState(false);

   const [isOpen2, setIsOpen2] = useState(false);

   const [isOpen3, setIsOpen3] = useState(false);

   const [isOpen4, setIsOpen4] = useState(false);

   const [isOpen5, setIsOpen5] = useState(false);

  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggle3 = () => {
   setIsOpen3(!isOpen3);
 };

 const toggle4 = () => {
   setIsOpen4(!isOpen4);
 };

 const toggle = () => {
   setIsOpen(!isOpen);
 };

 const toggle5 = () => {
   setIsOpen5(!isOpen5);
 };

      return (
         <div class="w-full mx-auto bg-gray-100 p-16">
    <h1 class="text-3xl font-bold mb-6 mt-5">FAQ - Buying Real Estate</h1>
    
    
    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle}>
        <h2 class="text-xl font-semibold">How do I hire Real Estate Lawyers.ca LLP??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">To view your billing statement, navigate to the Billing section of your account dashboard. There you will find a detailed breakdown of your charges and payment history.</p>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle2}>
        <h2 class="text-xl font-semibold">How do I qualify for the first time buyer land transfer tax rebate(s)??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen2? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">Inventory management can be done through the Inventory section of your account. Here, you can add, remove, or update existing items in your inventory.</p>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle3}>
        <h2 class="text-xl font-semibold">When will I be contacted by my Clerk/Lawyer regarding my file??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen3? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">Sales tracking is available in the Sales section of your account. You can view reports, analyze trends, and monitor your sales performance over time.</p>
      </div>
    </div>

   
    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle4}>
        <h2 class="text-xl font-semibold">What information does Real Estate Lawyers.ca LLP need to close my purchase??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen4? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">You can make a purchase through the Purchase section of your account. Simply select the items you wish to buy, proceed to checkout, and complete the payment process.</p>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle5}>
        <h2 class="text-xl font-semibold">When do I sign my closing documents??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen5? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">You can update your billing information under the Account Settings section. From there, you can edit your payment methods, billing address, and other relevant details.</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle5}>
        <h2 class="text-xl font-semibold">Where do I pick up my keys?</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen5? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">You can update your billing information under the Account Settings section. From there, you can edit your payment methods, billing address, and other relevant details.</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle5}>
        <h2 class="text-xl font-semibold">How much are your legal fees and what disbursements/closing costs do I pay?</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen5? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">You can update your billing information under the Account Settings section. From there, you can edit your payment methods, billing address, and other relevant details.</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center px-6 py-4 cursor-pointer border-b" onClick={toggle5}>
        <h2 class="text-xl font-semibold">How to I pay Real Estate Lawyers.ca LLP the closing funds??</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 rotate-0 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class={`px-6 py-4 ${isOpen5? 'visible' : 'hidden'}`}>
        <p class="text-gray-700">You can update your billing information under the Account Settings section. From there, you can edit your payment methods, billing address, and other relevant details.</p>
      </div>
    </div>
  </div>
      )

}