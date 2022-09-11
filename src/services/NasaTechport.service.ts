import { ITechport } from "../models/TechportModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

export class NasaTechportService {
getTechport(){
  const date = new Date().toDateString();
  const techportRequest: HttpRequestParamsInterface = {
    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-09-07&api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG"
    
  };
  return HttpClient.get<ITechport>(techportRequest);
};
}