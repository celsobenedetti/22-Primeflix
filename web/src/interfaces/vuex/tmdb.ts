export interface IImagesConfig {
  baseImgUrlTMDB: string;
  posterSizesTMDB: string[];
}

export interface ITMDBState {
  imagesConfig: IImagesConfig;
}
