import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: 'http://jourmey.top:8081',
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
});

interface Response {
    code: number;
    msg: string;
    result: any;
}

export interface GetReq {
    id: number;
    page_no: number;
    page_size: number;
}

interface Task {
    id: number; //: 1,
    url: string; //: "https://www.bilibili.com/video/BV1cP4y147Hj",
    signatures: string; //: "",
    tag: number[]; //: []
    status: number; //: 2,
    title: string; //: "比比东把小舞变成了兔子，你们能帮帮她吗？",
    site: string; //: "Bilibili",
    create_time: string; //: "2021-09-15T03:44:29Z",
    update_time: string; //: "2021-09-15T03:44:38Z"
}

interface TaskResponse extends Response {
    result: Task[];
}

export async function getTask(url: string, req: GetReq): Promise<AxiosResponse<TaskResponse>> {
    return instance.get(url, {params: req})
}