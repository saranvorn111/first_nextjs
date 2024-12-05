import React from "react";

function Body() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-12">
        <div></div>
        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-purple-600"
            viewBox="0 0 20 20"

            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Design products for workshop.
          </h1>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cursus imperdiet sed id elementum.
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
            Get started
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Polaroid camera"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Title 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Title 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Title 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Title 4</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Body;
