export interface IEpic {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  date: string;
}
