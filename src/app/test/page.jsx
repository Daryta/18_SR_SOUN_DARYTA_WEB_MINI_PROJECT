import React from "react";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import EditDeleteDropDownComponent from "@/components/EditDeleteDropDownComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent";
import NavbarComponent from "@/components/NavbarComponent";

const page = () => {
  return (
        <div className="w-full">
        <section className="my-10">
            Nav bar
            <NavbarComponent />
        </section>
        <section className="my-10">
            Todo card
            <TodoCardComponent />
        </section>
        <section className="my-10">
            Add new task
            <AddNewTaskComponent />
        </section>
        <section className="my-10">
        WorkspacePopupComponent
            <WorkspacePopupComponent />
        </section>
        <section className="my-10">
        ListBoardComponentHeader
            <ListBoardComponentHeader />
        </section>
        <section className="my-10">
        MonthlyStatisticsComponent
            <MonthlyStatisticsComponent />
        </section>
        <section className="my-10">
        EditDeleteDropDownComponent
            <EditDeleteDropDownComponent />
        </section>
        </div>
);
};

export default page;
