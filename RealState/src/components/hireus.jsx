export default function HireUs()
{
   return(

      <div className="w-full mt-12">

<body class=" p-6">
    <div class="max-w-4xl mx-auto  p-4">
        <h1 class="text-4xl font-bold mb-6">Hire Us Now</h1>
        <form action="#" method="POST" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div class="sm:col-span-1 border border-gray-400 rounded-md p-2">
                    <label for="full-name" class="block text-base font-medium text-gray-700">Full Name</label>
                    <input type="text" id="full-name" name="full-name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></input>
                </div>
                <div class="sm:col-span-1 border border-gray-400 rounded-md p-2">
                    <label for="cell-phone" class="block text-base font-medium text-gray-700">Cell Phone</label>
                    <input type="text" id="cell-phone" name="cell-phone" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></input>
                </div>
                <div class="sm:col-span-1 border border-gray-400 rounded-md p-2">
                    <label for="email" class="block text-base font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></input>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div class="sm:col-span-2 border border-gray-400 rounded-md p-2">
                    <label for="message" class="block text-base font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                <div class="sm:col-span-1">
                    <label for="upload-file" class="block text-base font-medium text-gray-700">Upload File</label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M24 0L24 48M48 24L0 24" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                                    <span>Browse Files</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only"></input>
                                </label>
                                <p class="pl-1">or drag & drop</p>
                            </div>
                            <p class="text-xs text-gray-500">0 of 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    SEND
                </button>
            </div>
        </form>
    </div>
</body>
      </div>
   )
}