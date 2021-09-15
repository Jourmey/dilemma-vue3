import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api',
    timeout: 3000,
    headers: {'content-type': 'application/json'}
});

interface Response {
    code: number;
    msg: string;
    data: any;
}

interface TaskResponse extends Response {
    message: string;
    status: string;
}

interface AddTaskRequest {
    name: string;
}

interface AddTaskResponse extends Response {
    data: string;
}

export async function getAllTask(url: string): Promise<AxiosResponse<TaskResponse>> {
    return instance.get(url)
}

export async function addTask(url: string, data: AddTaskRequest):Promise<AxiosResponse<AddTaskResponse>> {
    return instance.post(url, data)
}