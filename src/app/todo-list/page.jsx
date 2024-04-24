import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ListCardComponent from "@/components/ListCardComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const TodoPage = () => {
  return (
    <div className="w-full flex">
      <section className="w-[21%]">
        <SidebarComponent />
      </section>
      <section className="w-[79%] ml-10">
        <div>
          <NavbarComponent />
        </div>
        <div className="mt-5 ml-2 mr-10 flex">
          <section className="w-[70%]">
            <ListBoardComponentHeader />
            <ListCardComponent />
          </section>

          <section className="w-[30%] ml-10">
            <MonthlyStatisticsComponent />
          </section>
        </div>
      </section>
    </div>
  );
};

export default TodoPage;
