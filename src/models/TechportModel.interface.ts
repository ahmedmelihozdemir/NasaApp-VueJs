/* export interface TechportModel {
  techport: ITechport[];
} */

export interface ITechport {
  photos: ITechport[];
  camera: object;
  camera_name: string;
  earth_date: string;
  id: number;
  img_src: string;
  rover: object;
  sol: number;
}
