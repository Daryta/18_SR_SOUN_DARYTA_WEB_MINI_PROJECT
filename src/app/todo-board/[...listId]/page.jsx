import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getTasksByStatusAndWorkId, getTasksByWorkSpaceId, getWorkSpaceById } from "@/service/workspace.service";
import React from "react";

const ListPage = async ({params, searchParams}) => {
  const workspace = await getWorkSpaceById(params.listId);
  const todoTasks = await getTasksByStatusAndWorkId(params.listId, 1);
  const workingOnTasks = await getTasksByStatusAndWorkId(params.listId, 2);
  const checkingTasks = await getTasksByStatusAndWorkId(params.listId, 3);
  const completedTasks = await getTasksByStatusAndWorkId(params.listId, 4);

  return (
    <div className="w-full flex">
      <section className="w-[21%]">
        <SidebarComponent />
      </section>
      <section className="w-[79%] ml-10">
        <div>
          <NavbarComponent />
        </div>
        <div className="w-full">
          <div className="mt-5 ml-2 mr-10">
            <ListBoardComponentHeader workspace={workspace} searchParams={searchParams}/>
            <div className="w-full flex justify-between gap-6">
            <section className="w-[24%] mb-5 ">
                TODO
                <hr className="text-yellow-500 " />
                {todoTasks.data.map((data)=>(
                  <TodoCardComponent key={data.taskId} task={data}/>
                ))}
            
              </section>
              <section className="w-[24%] mb-5">
                WORKING
                <hr className="text-blue-500 " />
                {workingOnTasks.data.map((data)=>(
                  <TodoCardComponent key={data.taskId} task={data}/>
                ))}


              </section>
              <section className="w-[24%] mb-5">
                CHECKING
                <hr className="text-orange-500 " />
                {checkingTasks.data.map((data)=>(
                  <TodoCardComponent key={data.taskId} task={data}/>
                ))}
              </section>
              <section className="w-[24%] mb-5">
                COMPLETE
                <hr className="text-green-500 " />
                {completedTasks.data.map((data)=>(
                  <TodoCardComponent key={data.taskId} task={data}/>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPage;

