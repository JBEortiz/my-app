import React from 'react';

const NotFountPage = () => {
    return (
       <div className="bg-gradient-to-r from-blue-400 to-blue-500">
          <div className="min-h-full bg-black-700 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
              <main className="sm:flex">
                <p className="text-4xl font-bold tracking-tight text-white sm:text-7xl">404</p>
                <div className="sm:ml-6">
                  <div className=" sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-1 text-base text-white">Ups! puedes visitar la Home o contactar conmigo.</p>
                  </div>
                  <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-full border-solid border-2 border-blue-600 bg-gradient-to-r from-white to-white px-3 py-2 text-sm font-medium hover:from-blue-100 hover:to-blue-100 text-blue-600 shadow-sm"
                    >
                      Go back home
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-full border border-solid border-2 border-blue-600 bg-gradient-to-r from-white to-white px-3 py-2 text-sm font-medium hover:from-blue-100 hover:to-blue-100 text-blue-600 shadow-sm"
                    >
                      Contact support
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      );
}

export default NotFountPage;
