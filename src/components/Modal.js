import React, { Children } from 'react'

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div>
      <div className={`${showModal ? '' : 'hidden'}  overflow-x-hidden overflow-y-scroll absolute  top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center`}>
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
          {/* Modal content */}
          <div className="bg-gray-100  rounded-lg shadow relative dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                Terms of Service
              </h3>
              <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
