import { IApod } from "@/models/Apod.interface";
import { IEpic } from "@/models/EpicModel.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

export class NasaService {
  private demoKey = "aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG";
  getEpic(date: string) {
    const epicRequest: HttpRequestParamsInterface = {
      url: `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${this.demoKey}`,
    };
    return HttpClient.get<IEpic[]>(epicRequest);
  }

  getApod(date: string) {
    const apodRequest: HttpRequestParamsInterface = {
      url: `https://api.nasa.gov/planetary/apod?api_key=${this.demoKey}&date=${date}`,
    };
    return HttpClient.get<IApod>(apodRequest);
  }
}
