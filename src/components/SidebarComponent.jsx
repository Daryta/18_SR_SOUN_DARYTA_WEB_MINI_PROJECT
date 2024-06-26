import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkspaceService } from "@/service/workspace.service";
import { redirect } from "next/navigation";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SidebarComponent() {
  const workspaceData = await getAllWorkspaceService();

  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}

     
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workspaceData.data.map((data)=>(
        <div key={data.workSpaceId} className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-todo" ></div>
          
          <Link className="flex justify-between w-full pl-3" href={`/todo-list/${data.workSpaceId}?sidebar=workspace`}>
            {/* <p>HRD Design</p> */}
            <p>{data.workspaceName}</p>

          </Link>
            <EditDeleteDropDownComponent />
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>
        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
        {workspaceData.data.map((data)=>{
          if (data.isFavorite) {
            return (
              <div key={data.workSpaceId} className="flex items-center mt-5 w-full">
                <div className="rounded-full w-4 h-4 bg-workingOn"></div>
                
                <Link className="flex justify-between w-full pl-3" href={`/todo-list/${data.workSpaceId}?sidebar=favorite`}>
                  {/* <p>HRD Design</p> */}
                  <p>{data.workspaceName}</p>

                </Link>
              </div>
            )
          }
        })}
    </div>
  );
}
