export interface IImagesConfig {
  baseImgUrlTMDB: string;
  posterSizesTMDB: string[];
}

export interface IGenreMapping {
  id: string;
  name: string;
}

export interface ITMDBState {
  imagesConfig: IImagesConfig;
  genresMap: Map<string, string>;
}
