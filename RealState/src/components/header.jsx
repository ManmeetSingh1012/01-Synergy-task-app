

export default function Header() {

  return (


    <nav className="w-full">

      <div class="flex w-full flex-row flex-wrap justify-start px-10 py-5">




        <div class="flex items-center ">
          <img src="/src/assets/realstate.png" alt="Real Estate Lawyers Logo" class="pt-5 w-fit"></img>
        </div>



        <div  className="flex flex-col ml-10">


          <div class="flex flex-row space-x-6 ml-10 justify-evenly">



            <div className="flex flex-row flex-wrap space-x-10">

              <div class="text-gray-800 font-semibold ">
                <span>Call Us</span>
                <span class="block font-semibold text-red-500">1 (855) 466-3801</span>
              </div>
              <div class="text-gray-800 font-semibold">
                <span>Fax Us</span>
                <span class="block font-semibold text-red-500">1 (855) 466-3803</span>
              </div>
              <div class="text-gray-800 font-semibold">
                <span>Email Us</span>
                <span class="block font-semibold text-red-500">info@RealEstateLawyers.ca</span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap space-x-4 pl-14">



              <div>
                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>

              </div>




              <div>

                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </div>




              <div>

                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
              </div>


              <div>

                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </div>


              <div>

                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="pl-10">

              <span>v EN</span>
            </div>

            <div className="pl-10">



              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </div>

          </div>


          <div class="border-t mt-4 mb-4 border-gray-300 w-full"></div>

          <div class="flex flex-row space-x-6  ">



            <div className="flex flex-row flex-wrap space-x-14 pl-10">

              <div class="text-gray-800 text-xl font-semibold ">
                <span>Hire Us</span>
                
              </div>
              <div class="text-gray-800  text-xl font-semibold">
                <span>Free Quote</span>
                
              </div>
              <div class="text-gray-800  text-xl font-semibold">
                <span>About Us</span>
                
              </div>

              <div class="text-gray-800 text-xl  font-semibold">
                <span>Services</span>
                
              </div>


              <div class="text-gray-800 text-xl font-semibold">
                <span>Locations</span>
                
              </div>

              <div class="text-gray-800  text-xl font-semibold">
                <span>Lawyers</span>
                
              </div>

              <div class="text-gray-800 text-xl font-semibold">
                <span>Login</span>
                
              </div>
            </div>

            

            

          </div>


        </div>




      </div>


    </nav>



  )
}


/*
<div class="flex space-x-3">
            <a href="#" class="text-red-500"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-red-500"><i class="fab fa-youtube"></i></a>
            <a href="#" class="text-red-500"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-red-500"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-red-500"><i class="fab fa-google"></i></a>
            <a href="#" class="text-red-500"><i class="fas fa-globe"></i><span>EN</span></a>
            <a href="#" class="text-red-500"><i class="fas fa-search"></i></a>
          </div>

*/


/*



<div class="flex justify-center space-x-8 py-2 border-t border-gray-200">
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">Hire Us</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">Free Quote</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">About</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">Services</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">Locations</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500">Lawyers</a>
        <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-red-500"><i class="fas fa-user"></i> Login</a>
      </div>

      */