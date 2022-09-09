import { IEpic } from "@/models/EpicModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

export class NasaService {
  getEpicImage(){
    const epicRequest: HttpRequestParamsInterface = {
      url: "https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG",
    };
    return HttpClient.get<IEpic[]>(epicRequest);
  }
}

