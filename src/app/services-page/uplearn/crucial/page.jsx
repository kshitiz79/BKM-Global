import React from 'react';

const page = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden py-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0d0e3c] to-[#0f6320] text-white text-center py-6">
        <h1 className="text-3xl font-bold">  Why Uplearning is Crucial in Trading</h1>
       
      </div>

      {/* Main Content */}
      <div className="p-6 flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-gray-800 mb-4">
           
            <br />
            The financial markets are constantly changing, influenced by
          technological advancements, economic shifts, and global events. To
          stay ahead, it’s not enough to learn new things; sometimes, you must
          also uplearn old practices that no longer serve you.
          </p>
         

          {/* Program Highlights */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-blue-900 flex items-center">
              <span className="mr-2">✔</span>   The Pitfalls of Sticking to Old Habits
            </h2>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
            <li>
              <strong>Complacency:</strong> Relying on outdated methods can
              lead to complacency, which is detrimental in a fast-paced trading
              environment.
            </li>
            <li>
              <strong>Resistance to Change:</strong> Traders resistant to
              change may miss out on opportunities due to fear of the unknown
              or low confidence in new approaches.
            </li>
            <li>
              <strong>Increased Risk:</strong> Clinging to old strategies in a
              changing market increases the chance of losses.
            </li>
            </ul>
          </div>
        </div>

        {/* Right Section - 3 Stage Program */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-blue-900 flex items-center justify-center mb-4">
            <span className="mr-2">📋</span>  The Benefits of Uplearning
          </h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="ml-4 p-4 bg-gray-100 rounded-lg flex-1">
                <h3 className="font-semibold">Adaptability:</h3>
                <ul className=" list-inside text-gray-800 mt-2 space-y-1">
                <li>
              Enables traders to stay in sync
              with the latest market conditions.
            </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="ml-4 p-4 bg-gray-100 rounded-lg flex-1">
                <h3 className="font-semibold">Innovative Thinking:</h3>
                <p className="text-gray-800 mt-2"><strong></strong> Encourages new strategies
                and continuous improvement.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="ml-4 p-4 bg-gray-100 rounded-lg flex-1">
                <h3 className="font-semibold">Reduced Stress:</h3>
                <p className="text-sm text-gray-600">
              New approaches reduce the mental
                burden of using outdated methods.
                </p>
                
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;