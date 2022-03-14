import { SheepStatusItemType, SheepStatusListType } from "../shared.types";

export function getKillCount(sheepStatusList: SheepStatusListType): number {
    let killCount = 0;
    sheepStatusList.forEach((element: SheepStatusItemType) => {
      if (element.size === element.activeHits) {
        killCount++
      }
    })
    return killCount;
  }