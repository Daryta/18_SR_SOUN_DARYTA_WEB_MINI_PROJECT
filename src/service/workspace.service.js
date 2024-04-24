import headerToken from "@/app/api/headerToken";


//Get All Workspace Service
export const getAllWorkspaceService = async () =>{
    const header = await headerToken();
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces",
{ headers: header},
{catch: 'no-store'}
);
    const data = await res.json();
    console.log("data in service: ", data)
    return data;
}