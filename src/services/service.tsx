import { size } from "lodash";
import { GameLayoutBoardType, GameLayoutUnitStatus, GameLayoutUnitType, SheepStatusListType, ShipDataType, ShipPlacementsType, shipTypesType } from "../shared.types";

export function generateLayoutArea(height: number, width: number): GameLayoutBoardType {
  if (height === undefined) return [];
  if (width === undefined) return [];

  const board: GameLayoutBoardType = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const id = `${i}-${j}`
      const element: GameLayoutUnitType = {
        id,
        x: i,
        y: j,
        status: GameLayoutUnitStatus.clear
      };
      board.push(element);
    }
  }
  return board
};

export function checkTargetHit(hitElement: GameLayoutUnitType, targetPlacements: ShipPlacementsType): boolean {
  return targetPlacements.some((item: ShipDataType) => {
    return item.positions.some(([y, x]: [number, number]) => {
      return (x === hitElement.x && y === hitElement.y);
    });
  });
}

export function getUpdatedLayoutAreaData(indexCheck: number, layoutAreaData: GameLayoutBoardType, isTargetHit: boolean): GameLayoutBoardType {
  const checkElement = { ...layoutAreaData[indexCheck] };
  if (isTargetHit) {
    checkElement.status = GameLayoutUnitStatus.hit;
  } else {
    checkElement.status = GameLayoutUnitStatus.miss;
  }
  const newLayoutAreaData = [...layoutAreaData];
  newLayoutAreaData[indexCheck] = checkElement;
  return newLayoutAreaData;
};

export function getUpdatedStatusData(shipTypes: shipTypesType, shipPlacements_: ShipPlacementsType, layoutAreaData: GameLayoutBoardType): SheepStatusListType {
  // debugger;
  let shipPlacements = [...shipPlacements_]
  const newSheepStatusList: SheepStatusListType = []
  const shipNames = Object.keys(shipTypes);
  shipNames.forEach((shipName: string) => {
    const { size, count } = shipTypes[shipName];
    for (let i = 0; i < count; i++) {
      const shipItem = shipPlacements.find((shipData: any) => {
        return shipData.ship === shipName;
      });
      let activeHits = 0;
      if (shipItem) {
        shipItem.positions.forEach(element => {
          const searchId = `${element[1]}-${element[0]}`
          const layoutElement = layoutAreaData.find(item => {
            return (item.id === searchId);
          })
          if(layoutElement && layoutElement.status === GameLayoutUnitStatus.hit){
            activeHits++;
          }
        });
        shipPlacements = shipPlacements.filter(item => item !== shipItem)

      }

      const shipData = {name: shipName, size, activeHits, img:'', };
      newSheepStatusList.push(shipData);
    }
  });
    return newSheepStatusList;
};