import { IEpic } from "@/models/EpicModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

export class NasaService {
  getEpic(){
    const epicRequest: HttpRequestParamsInterface = {
      url: "https://api.nasa.gov/EPIC/api/natural?api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG",
    };
    return HttpClient.get<IEpic[]>(epicRequest);
  }
}


