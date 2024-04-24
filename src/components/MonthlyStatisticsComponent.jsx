import { getTaskCountByStatus } from "@/service/workspace.service";
import React from "react";

export default async function MonthlyStatisticsComponent({workSpaceId}) {
  const taskCounts = await getTaskCountByStatus(workSpaceId, 4);

  return (
    <div>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">Statistics on April</h1>
      {taskCounts.data.length != 0 ? taskCounts.data.map((data, idx)=>(
          <div key={idx} className="flex gap-3 items-center">
            <div className={`h-5 rounded-lg w-1 ${data?.status == 1 ? 'bg-yellow-300' 
                                                : data?.status == 2 ? 'bg-blue-600' 
                                                : data?.status == 3 ? 'bg-orange-300'
                                                : 'bg-green-300' }`}></div>
            {data?.status == 1 ? <p> Todo : <span>{data?.count}</span> task{data?.count == 1 ? '(s)' : 's'}</p>
            : data?.status == 2 ? <p> Working on : <span>{data?.count}</span> task{data?.count == 1 ? '(s)' : 's'}</p>
            : data?.status == 3 ? <p> Checking : <span>{data?.count}</span> task{data?.count == 1 ? '(s)' : 's'}</p>
            : <p> Completed : <span>{data?.count}</span> task{data?.count == 1 ? '(s)' : 's'}</p> }
            
          </div>
        )) :
        <p>
          No tasks for this workspace
        </p>
      }
    </div>
  );
}
