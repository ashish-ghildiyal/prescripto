import React from 'react'
import {useNavigate} from 'react-router'

const PageNotFound = () => {

    const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 ">
          {/* Left: Illustration / number */}
          <div className="flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8">
            <div className="text-center text-white">
              <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">404</h1>
              <p className="mt-2 text-sm md:text-base opacity-90">Page Not Found</p>
            </div>
          </div>

          {/* Right: Message and actions */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Oops — we can't find that page</h2>
            <p className="mt-3 text-sm text-gray-600">
              The page you’re looking for may have been moved, removed, or had its name changed.
            </p>

            {/* Actions */}
            <div className="mt-6 ">
              <button
               onClick={() => navigate("/")}
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Go to Home
              </button>

              {/* <button
               onClick={() => window.history.back()}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 border border-transparent"
              >
                Go Back
              </button> */}
            </div>

            <p className="mt-6 text-xs text-gray-400">
              If you think this is a mistake, please let us know at{" "}
              <a href="mailto:support@example.com" className="text-indigo-600 hover:underline">
                support@example.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound