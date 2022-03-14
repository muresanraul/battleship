// export enum ProjectsAndModulesDataType {
//   PROJECT = 'PROJECT',
//   FOLDER = 'FOLDER',
//   MODULE = 'MODULE',
// }

// export enum UpVersionState {
//   UpToDate = 'UpToDate',
//   ToUpVersion = 'ToUpVersion',
//   ToUpdate = 'ToUpdate',
// }

// export type ProjectData = {
//   name: string;
//   version: string;
//   type?: ProjectsAndModulesDataType.PROJECT;
//   children: ModuleData[];
//   toUpVersion?: UpVersionState;
//   info: {
//     [key: string]: unknown;
//   };
// };

// export type ModuleData = {
//   name: string;
//   version: string;
//   type?: ProjectsAndModulesDataType.MODULE;
//   children: ModuleData[];
//   path?: string;
//   parents?: (ProjectData | ModuleData)[];
//   toUpdate?: boolean;
//   toUpVersion?: UpVersionState;

//   info: {
//     [key: string]: unknown;
//   };
// };

// export type FolderData = {
//   name: string;
//   type?: ProjectsAndModulesDataType.FOLDER;
//   children: ModuleData[];
// };

// // export type ProjectsAndModulesData = {
// //   projects?: (ProjectData | FolderData)[];
// // };

// export type ProjectsAndModulesData = (ProjectData | FolderData)[];

// // export type OnStartProjectsSnapshot = {
// //   projectsandmodules: ProjectsAndModulesData;
// // };
// // datace reflecta structura curenta

// export enum ActiveActionType {
//   initialisation = 'initialisation',
//   finalisation = 'finalisation',
// }

// export type VersionData = {
//   name: string;
//   parents: string[];
//   version: string;
//   toUpgrade: boolean;
// };

// export type ModuleVersions = {
//   name: string;
//   modulesByVersions: VersionData[];

//   projectsandmodules: ProjectsAndModulesData;
// };

// export type ModuleListType = {
//   [key: string]: {
//     [version: string]: ModuleData[];
//   };
// };

// export type ModuleRegistry = {
//   moduleList: ModuleListType;
//   processing: unknown;
//   projectsAndModulesSnapshot: ProjectsAndModulesData;
//   activeAction: ActiveActionType;
// };

export type ShipDataType = {
  ship: string;
   positions: [
     [number,number]
   ]
}
export type ShipPlacementsType = ShipDataType[];
export type shipTypesType = {
  [key: string]: {
    size: number;
    count: number;
  }
}
export type SheepStatusItemType = {
  name: string,
  img: string,
  size: number,
  activeHits: number
}
export type SheepStatusListType = SheepStatusItemType[];

export type NonEmptyArray<T> = T[];
export type BoardDimensionsType = { height: number, width: number }
export enum GameLayoutUnitStatus {
  clear = 'clear',
  miss = 'miss',
  hit = 'hit',
}
export type GameLayoutUnitType = {id: string, y: number, x: number, status
  : GameLayoutUnitStatus };
export type GameLayoutBoardType = GameLayoutUnitType[];
