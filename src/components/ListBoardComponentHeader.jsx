import { addWorkSapceToFavorite } from "@/service/workspace.service";
import React from "react";
import FavoriteButton from "./FavoriteButton";

export default async function ListBoardComponentHeader({workspace, searchParams}) {

  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p className="capitalize">{searchParams?.sidebar}</p> / <p>{workspace.data.workspaceName}</p> / <p className="capitalize">{searchParams?.section ? searchParams?.section : 'List'}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{workspace.data.workspaceName}</h2>
        <FavoriteButton workspace={workspace}/>
      </div>
    </>
  );
}
