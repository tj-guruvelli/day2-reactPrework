function Links() {
    return (
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Links
              <br class="hidden lg:inline-block"></br>
            </h1>
            <p class="mb-8 leading-relaxed"></p>
            
            <div class="animate-pulse flex justify-center">

              <a href="https://github.com/tj-guruvelli"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Github</a>
              
              <a href="https://www.linkedin.com/in/tejaguruvelli/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Linkedln</a>
            
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Links;
  