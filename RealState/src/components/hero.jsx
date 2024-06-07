export default function Hero()
{
   return (

      <div className="w-full flex flex-row flex-wrap mt-12 p-5">

      <div className="w-1/2 p-10">
      <div class="max-w-4xl mx-auto ">
            <h1 class="text-3xl font-bold mb-4">Buying Real Estate</h1>
            <h2 class="text-xl font-semibold mb-6">RealEstateLawyers.ca LLP</h2>
            <p class="mb-4">
               If you are buying a property located anywhere in Ontario, Real Estate Lawyers.ca LLP can assist you with the closing. Included in our flat-rate legal fee is one remote video signing appointment. You can sign by video conference anywhere in the world from 7am-midnight (EST) 7 days a week. (<a href="https://www.RealEstateLawyers.ca/mobile" class="text-blue-600 underline">www.RealEstateLawyers.ca/mobile</a>)
            </p>
            <h3 class="text-lg font-semibold mb-4">Our flat rate legal fees include the following:</h3>
            <ul class="list-disc list-inside mb-6 p-2">
               <li>100% price match guarantee (<a href="https://www.RealEstateLawyers.ca/guarantee" class="text-blue-600 underline">www.RealEstateLawyers.ca/guarantee</a>)</li>
               <li>Video conference anywhere in the world from 7 am-midnight (EST) 7 days a week</li>
               <li>Receive your net proceeds by EFT or wire as per your direction RE funds (no holds on your money)</li>
               <li>Speak to a lawyer for legal advice on your transaction</li>
               <li>Client portal to manage all of your transactions (coming soon!)</li>
               <li>Each of our lawyers has $59 million insurance coverage per transaction whereas the industry standard is $1 million</li>
               <li>We can close transactions where the purchase price exceeds $1M as each of our lawyers has $59M per transaction, whereas LawPro has advised that 99% of all lawyers only have the minimum insurance of $1M per transaction.</li>
            </ul>
            <a href="#" class="bg-red-500 text-white py-2 px-4 rounded">Get a Free Quote</a>
         </div>

      </div>


      <div className="w-1/2 flex flex-col items-center align-middle justify-center">
      <img src="/src/assets/advo.jpg" alt="Real Estate Lawyers Logo" class="pt-5 h-96"></img>
        

      </div>

         
      </div>
   )
}