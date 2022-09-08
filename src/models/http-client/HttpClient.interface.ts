import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
/**
 * @Name HttpClientInterface
 * @description
 * Interface for our HttpClient wrapper
 */
export interface HttpClientInterface {
    get<R>(parameters: HttpRequestParamsInterface): Promise<R>;
}
