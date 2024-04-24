import React from "react";

const ListCardComponent = () => {
  return (
    <section class="w-full mt-5 bg-yellow-300 rounded-xl">
        <div className="w-full flex justify-between items-center text-left">
            <div className="w-[15%] p-4">
                <table className="bg-white w-[70px] rounded-lg h-[70px] text-center">
                    <tr>
                        <th className="text-red-600 text-xl">Wed</th>
                    </tr>
                    <tr>
                        <td className="text-4xl font-bold">17</td>
                    </tr>
                </table>
            </div>
            <div className="w-[60%]  p-4 mr-24 text-[#1E293B] overflow-hidden">
                <table>
                    <tr>
                        <th>Slack Integration</th>
                    </tr>
                    <tr>
                        <td>Add a field in the portal to let the user connect their Slack account.</td>
                    </tr>
                </table>
            </div>
            <div className="w-[25%]  p-4 flex justify-center mt-10">
            <button class="px-14 py-1 bg-white hover:bg-blue-600 hover:text-white text-[#004F74]  md:text-lg rounded-lg shadow-md">
              Todo
            </button>
            </div>
        </div>






    {/* <div
        class=" flex flex-wrap md:flex-nowrap h-32  shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <div className=" w-36 p-5 max-h-[100px]">
            <table className="w-full  rounded-lg h-[90px]  text-center bg-blue-600">
                <tr>
                    <th className="text-2xl text-red-700">Wed</th>
                </tr>
                <tr>
                    <td className="text-4xl font-bold">17</td>
                </tr>
            </table>

        </div>
        <div class="w-full ">
            <div class="bg-blue-50  h-full flex items-center justify-between">
                <div class=" flex justify-between ">
                    <div>
                        <div class="text-lg text-gray-700">
                            <span class="text-gray-900 font-bold">Working On Task</span> 
                        </div>
                        <div class="flex items-center">
                            <div class="text-gray-600 text-sm md:text-base mt-1">
                            Add a field in the portal to let the user connect their Slack account.fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhieurei
                            </div>
                        </div>
                    </div>
                </div>
                    <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
              To do
            </button>
            </div>
        </div>
    </div> */}
</section>
);
};

export default ListCardComponent;
