'use client'
import Image from "next/image";
import React from "react";
import { addWorkSapceToFavorite } from "@/service/workspace.service"

export default function FavoriteButton({workspace}) {
    const toggleFavorite = async () => {
        const res = await addWorkSapceToFavorite(workspace.workSpaceId, !workspace.isFavorite)
    }

    return (
        <div className="border border-gray rounded-lg p-2" onClick={() => toggleFavorite()}>
            <Image
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="black star"
            />
        </div>
    );
}
