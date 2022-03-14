import { GameLayoutBoardType, GameLayoutUnitStatus } from '../shared.types';
import { generateLayoutArea, getUpdatedLayoutAreaData } from './service';

describe('generateLayoutArea()', () => {
  test('should return empty array if height < 1', () => {
    const expected: GameLayoutBoardType = [];
    const actual: GameLayoutBoardType = generateLayoutArea(0, 11);
    expect(actual).toEqual(expected);
  })

  test('should return empty array if width < 1', () => {
    const expected: GameLayoutBoardType = [];
    const actual: GameLayoutBoardType = generateLayoutArea(10, -10);
    expect(actual).toEqual(expected);
  })

  test('should return aquret array if height = 2 and width = 2', () => {
    const { clear: status } = GameLayoutUnitStatus;
    const expected: GameLayoutBoardType = [
      {id: '0-0',  x: 0, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '0-1',  x: 0, y: 1,  status: GameLayoutUnitStatus.clear },
      {id: '1-0',  x: 1, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '1-1',  x: 1, y: 1,  status: GameLayoutUnitStatus.clear },
    ];
    const actual: GameLayoutBoardType = generateLayoutArea(2, 2);
    expect(actual).toEqual(expected);
  })
})

describe('getUpdatedLayoutAreaData()', () => {
  test('should return correct GameLayoutBoardType with hit status on updated element', () => {
    const indexCheck = 1;

    const initial_layoutAreaData: GameLayoutBoardType = [
      {id: '0-0',  x: 0, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '0-1',  x: 0, y: 1,  status: GameLayoutUnitStatus.clear },
      {id: '1-0',  x: 1, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '1-1',  x: 1, y: 1,  status: GameLayoutUnitStatus.clear },
    ];

    const isTargetHit = true;

    const expected: GameLayoutBoardType = [
      {id: '0-0',  x: 0, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '0-1',  x: 0, y: 1,  status: GameLayoutUnitStatus.hit },
      {id: '1-0',  x: 1, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '1-1',  x: 1, y: 1,  status: GameLayoutUnitStatus.clear },
    ];
    const actual: GameLayoutBoardType = getUpdatedLayoutAreaData(indexCheck, initial_layoutAreaData, isTargetHit);
    expect(actual).toEqual(expected);
  })

  test('should return correct GameLayoutBoardType with miss status on updated element', () => {
    const indexCheck = 2;

    const initial_layoutAreaData: GameLayoutBoardType = [
      {id: '0-0',  x: 0, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '0-1',  x: 0, y: 1,  status: GameLayoutUnitStatus.clear },
      {id: '1-0',  x: 1, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '1-1',  x: 1, y: 1,  status: GameLayoutUnitStatus.clear },
    ];

    const isTargetHit = false;

    const expected: GameLayoutBoardType = [
      {id: '0-0',  x: 0, y: 0,  status: GameLayoutUnitStatus.clear },
      {id: '0-1',  x: 0, y: 1,  status: GameLayoutUnitStatus.clear },
      {id: '1-0',  x: 1, y: 0,  status: GameLayoutUnitStatus.miss },
      {id: '1-1',  x: 1, y: 1,  status: GameLayoutUnitStatus.clear },
    ];
    const actual: GameLayoutBoardType = getUpdatedLayoutAreaData(indexCheck, initial_layoutAreaData, isTargetHit);
    expect(actual).toEqual(expected);
  })
})
