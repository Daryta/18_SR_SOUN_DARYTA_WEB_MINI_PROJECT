import React from "react";

const ListCardComponent = ({task}) => {
    const date = new Date(task?.dueDate);
    const dayOfWeek = date.toLocaleString('en-US', {weekday: 'short'})
    const dayOfMonth = date.getDate();
  return (
    <section class={`w-full mt-5  rounded-xl ${task?.status == 1 ? 'bg-yellow-300' 
                                             : task?.status == 2 ? 'bg-blue-600' 
                                             : task?.status == 3 ? 'bg-orange-300'
                                             : 'bg-green-300' }`} >
        <div className="w-full flex justify-between items-center text-left">
            <div className="w-[15%] p-4">
                <table className="bg-white w-[70px] rounded-lg h-[70px] text-center">
                    <tr>
                        <th className="text-red-600 text-xl">{dayOfWeek}</th>
                    </tr>
                    <tr>
                        <td className="text-4xl font-bold">{dayOfMonth}</td>
                    </tr>
                </table>
            </div>
            <div className="w-[60%]  p-4 mr-24 text-[#1E293B] overflow-hidden">
                <table>
                    <tr>
                        <th>{task.taskTitle}</th>
                    </tr>
                    <tr>
                        <td>{task.description}</td>
                    </tr>
                </table>
            </div>
            <div className="w-[25%]  p-4 flex justify-center mt-10">
            {task?.status == 1 ? (
                <button class="px-10 py-1 bg-white hover:bg-blue-600 hover:text-white text-[#004F74]  md:text-lg rounded-lg shadow-md">
                    Todo
                </button>
            ) :
            task?.status == 2 ? (
                <button class="px-10 py-1 bg-white hover:bg-blue-600 hover:text-white text-[#004F74]  md:text-lg rounded-lg shadow-md">
                    Working On
                </button>
            ) :
            task?.status == 3 ? (
                <button class="px-10 py-1 bg-white hover:bg-blue-600 hover:text-white text-[#004F74]  md:text-lg rounded-lg shadow-md">
                    Checking
                </button>
            ) : (
                <button class="px-10 py-1 bg-white hover:bg-blue-600 hover:text-white text-[#004F74]  md:text-lg rounded-lg shadow-md">
                    Completed
                </button>
            )
        }
            </div>
        </div>
</section>
);
};

export default ListCardComponent;
