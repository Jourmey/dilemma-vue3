import axios, { AxiosResponse } from "axios";

export const BaseUrl = "http://170.106.168.16"
// export const BaseUrl = "dilemma"

const instance = axios.create({
    baseURL: "http://170.106.168.16:8081",//服务名
    timeout: 3000,
    headers: { 'content-type': 'application/json' }
});


export interface Response {
    code: number;
    msg: string;
    result: any;
}

export interface GetReq {
    id: number;
    page_no: number;
    page_size: number;
}

export interface Task {
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

export interface TaskResponse extends Response {
    result: Task[];
}

export interface TaskCreatReq {
    url: string;
    tag: number[];
}

export async function getTask(req: GetReq): Promise<AxiosResponse<TaskResponse>> {
    return instance.get("/task", { params: req })
}
export async function postTaskCreat(req: TaskCreatReq): Promise<AxiosResponse<Response>> {
    return instance.post("/task/creat", req)
}


export interface TaskInfoGetReq extends GetReq {
    task_id: number;
}

export interface TaskinfoResponse extends Response {
    result: TaskInfo[];
}

export interface TaskInfo {
    id: number;             // id
    task_id: number;        // 关联任务
    format: string;         // 链接:dash-flv360
    container: string;      // 类型:mp4
    quality: string;        // 质量:流畅 360P
    size: number;           // 任务大小
    size2: string;          // 前端扩充字段
    status: number;         // 任务状态 0未处理 1处理中 2获取信息 3获取失败
    create_time: string;    // 创建时间
    update_time: string;    // 修改时间
}

export async function getTaskinfo(req: TaskInfoGetReq): Promise<AxiosResponse<TaskinfoResponse>> {
    return instance.get("/taskinfo", { params: req })
}


export interface Video {
    id: number;           // id
    task_info_id: number; // 关联任务信息
    path: string;         // 路径
    title: string;        // 标题
    create_time: string;  // 创建时间
    update_time: string;  // 修改时间
}

export interface VideoResponse extends Response {
    result: Video[];
}

export interface VideoDownloadReq {
    task_info_id: number[];
}

export async function getViedo(req: GetReq): Promise<AxiosResponse<VideoResponse>> {
    return instance.get("/video", { params: req })
}

export async function postViedoDownload(req: VideoDownloadReq): Promise<AxiosResponse<Response>> {
    return instance.post("/video/download", req)
}
