import { ITechport } from "../models/TechportModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

let  today = new Date();
let  dd = String(today.getDate()-2).padStart(2, '0');
let  mm = String(today.getMonth() + 1).padStart(2, '0');
let  yyyy = today.getFullYear();
let datex = yyyy + '-' + mm + '-' + dd;

export class NasaTechportService {
getTechport(){
  const date = new Date().toDateString();
  const techportRequest: HttpRequestParamsInterface = {
    /* url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-09-12&api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG" */
    url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${datex}&api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG`
  };
  return HttpClient.get<ITechport>(techportRequest);
};
}