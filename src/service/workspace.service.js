import headerToken from "@/app/api/headerToken";


//Get All Workspace Service
export const getAllWorkspaceService = async () =>{
    const header = await headerToken();
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces",
                        { headers: header},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("all workspace data in workspace service: ", data)
    return data;
}

export const getTasksByWorkSpaceId = async (workSpaceId) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=${workSpaceId}`,
                        { headers: header},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("all tasks data in workspace service: ", data)
    return data;
}

export const getWorkSpaceById = async (workSpaceId) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspace/${workSpaceId}`,
                        { headers: header},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("workspace data in workspace service: ", data)
    return data;
}

export const getTasksByStatusAndWorkId = async (workSpaceId, status) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks/getTaskByStatusAndWorkspaceId/${status}/${workSpaceId}`,
                        { headers: header},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("tasks data filter status in workspace service: ", data)
    return data;
}

export const getTaskCountByStatus = async (workSpaceId, month) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks/getTaskCountByStatus/${month}/${workSpaceId}`,
                        { headers: header},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("tasks count data filter status in workspace service: ", data)
    return data;
}

export const addWorkSapceToFavorite = async (workSpaceId, isFavorite) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/add-to-favorite/${workSpaceId}`,
                        { headers: header, body: {
                            isFavorite: isFavorite
                        }},
                        {catch: 'no-store'}
                    );
    const data = await res.json();
    console.log("tasks count data filter status in workspace service: ", data)
    return data;
}