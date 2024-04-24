import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";
import Image from "next/image"

const TodoListPage = () => {
;  return (
    <div className="w-full flex">
      <section className="w-[21%]">
        <SidebarComponent />
      </section>
      <section className="w-[79%] ml-10">
        <div>
          <NavbarComponent />
        </div>
        <div className="w-full mt-24 flex justify-center items-center">
        <Image src={"https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597"} width={550} height={100} />
        </div>
      </section>
    </div>
  );
};

export default TodoListPage;
