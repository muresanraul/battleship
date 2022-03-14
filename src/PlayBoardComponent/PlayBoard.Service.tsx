import { BoardDimensionsType, GameLayoutBoardType, NonEmptyArray } from "../shared.types";

export function last<T>(arr: NonEmptyArray<T>): T;
export function last(arr: []): null;
export function last<T>(arr: T[]): T | null {
  const dataSize = arr.length;
  if (!dataSize) return null;
  return arr[dataSize - 1]
};

export function getBoardDimensions(layoutAreaData: GameLayoutBoardType): BoardDimensionsType {
  if (!layoutAreaData.length) return { height: 0, width: 0 }
  const layoutAreaData_: NonEmptyArray<any> = layoutAreaData;
  const { x, y } = last(layoutAreaData_);
  return ({ height: y + 1, width: x + 1 })
}