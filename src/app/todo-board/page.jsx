import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import React from "react";

const TodoBoardPage = () => {
  return (
    <div className="w-full flex">
      <section className="w-[21%]">
        <SidebarComponent />
      </section>
      <section className="w-[79%] ml-10">
        <div>
          <NavbarComponent />
        </div>
        <div className="mt-5 ml-2 mr-10">
          <ListBoardComponentHeader />
          <div></div>
          <div className="w-full flex justify-between gap-6">
          <section className="w-[24%] mb-5 ">
             TODO
             <hr className="text-yellow-500 " />
             <TodoCardComponent />
         
           </section>
           <section className="w-[24%] mb-5">
             WORKING
             <hr className="text-blue-500 " />
             <TodoCardComponent />


           </section>
           <section className="w-[24%] mb-5">
             CHECKING
             <hr className="text-orange-500 " />
             <TodoCardComponent />
           </section>
           <section className="w-[24%] mb-5">
             COMPLETE
             <hr className="text-green-500 " />
             <TodoCardComponent />
           </section>
          </div>
        </div>
      </section>
    </div>

    // <div className="w-[75%] ml-[305px]">
    //     <NavbarComponent />
    //   <ListBoardComponentHeader />
    //   <div className="w-full  flex  justify-between  mt-3">
    //     <section className="w-[24%] mb-5">
    //       TODO
    //       <hr className="text-yellow-500 " />
    //       <TodoCardComponent />
    //     </section>
    //     <section className="w-[24%] mb-5">
    //       WORKING
    //       <hr className="text-blue-500 " />
    //       <TodoCardComponent />
    //     </section>
    //     <section className="w-[24%] mb-5">
    //       CHECKING
    //       <hr className="text-orange-500 " />
    //       <TodoCardComponent />
    //     </section>
    //     <section className="w-[24%] mb-5">
    //       COMPLETE
    //       <hr className="text-green-500 " />
    //       <TodoCardComponent />
    //     </section>
    //   </div>
    // </div>
  );
};

export default TodoBoardPage;
