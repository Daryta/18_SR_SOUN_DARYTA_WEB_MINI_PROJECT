import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ListCardComponent from "@/components/ListCardComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { getTasksByWorkSpaceId, getWorkSpaceById } from "@/service/workspace.service";
import Image from "next/image";
import React from "react";

const ListPage = async ({params, searchParams}) => {
  const tasks = await getTasksByWorkSpaceId(params.listId);
  const workspace = await getWorkSpaceById(params.listId);

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
          <div className="mt-5 ml-2 mr-10 flex">
            <section className="w-[70%]">
              <ListBoardComponentHeader workspace={workspace} searchParams={searchParams}/>
              {tasks.data.length != 0 ? tasks.data.map((data)=>(
                <>
                  <ListCardComponent task={data}/>
                </>
              )) : 
              <div className="flex justify-center items-center">
                <Image src={"https://th.bing.com/th/id/R.8ba65c1e24ea7bd4b50e0f69a4bef3f9?rik=dSF92JN16bfB7Q&riu=http%3a%2f%2fwww.fam-kurtze.de%2fnodata.png&ehk=xHsrrcpZC%2fwtskgUVV4bAV9lZGVwHkL43l5F4%2b8EYBw%3d&risl=&pid=ImgRaw&r=0"} width={550} height={100} />
              </div>
            }
            </section>

            <section className="w-[30%] ml-10">
              <MonthlyStatisticsComponent workSpaceId={params.listId}/>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPage;

