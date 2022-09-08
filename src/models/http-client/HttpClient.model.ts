import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClientInterface } from "./HttpClient.interface";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";

export class HttpClientModel implements HttpClientInterface {
    get<R>(parameters: HttpRequestParamsInterface): Promise<R> {
        return new Promise<R>((resolve, reject) => {
            const { url } = parameters;
            axios
                .get(url)
                .then((response: AxiosResponse) => {
                    resolve(response.data as R);
                })
                .catch((response: AxiosResponse) => {
                    console.info("------ rejecting ----");
                    reject(response);
                });
        });
    }
}
export const HttpClient: HttpClientInterface = new HttpClientModel();
