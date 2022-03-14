import { BoardDimensionsType, GameLayoutBoardType, GameLayoutUnitStatus } from "../shared.types";
import { getBoardDimensions, last } from "./PlayBoard.Service";

describe('last()', () => {
    test('should return null if the array param is empty', () => {
        const expected = null;
        const actual: any = last([]);
        expect(actual).toEqual(expected);
    })

    test('should return last element if the array param contains 2 elements', () => {
        const expected = { text: 'test1' };
        const actual: any = last([{ text: 'test0' }, { text: 'test1' }]);
        expect(actual).toEqual(expected);
    })
})

describe('getBoardDimensions()', () => {
    test('should return height=0 width=0 if the array param is empty', () => {
        const data: GameLayoutBoardType = [];
        const expected: BoardDimensionsType = { height: 0, width: 0 };
        const actual: BoardDimensionsType = getBoardDimensions(data);
        expect(actual).toEqual(expected);
    })

    test('should return height=2 width=2 if the array 2 / 2', () => {
        const data: GameLayoutBoardType = [
            { id: '0-0', x: 0, y: 0, status: GameLayoutUnitStatus.clear },
            { id: '1-0', x: 1, y: 0, status: GameLayoutUnitStatus.clear },
            { id: '0-1', x: 0, y: 1, status: GameLayoutUnitStatus.clear },
            { id: '1-1', x: 1, y: 1, status: GameLayoutUnitStatus.clear },
        ];
        const expected: BoardDimensionsType = { height: 2, width: 2 };
        const actual: BoardDimensionsType = getBoardDimensions(data);
        expect(actual).toEqual(expected);
    })

    test('should return height=2 width=3 if the array 2 / 3', () => {
        const data: GameLayoutBoardType = [
            { id: '0-0', x: 0, y: 0, status: GameLayoutUnitStatus.clear },
            { id: '1-0', x: 1, y: 0, status: GameLayoutUnitStatus.clear },
            { id: '2-0', x: 2, y: 0, status: GameLayoutUnitStatus.clear },
            { id: '0-1', x: 0, y: 1, status: GameLayoutUnitStatus.clear },
            { id: '1-1', x: 1, y: 1, status: GameLayoutUnitStatus.clear },
            { id: '2-1', x: 2, y: 1, status: GameLayoutUnitStatus.clear },
        ];
        const expected: BoardDimensionsType = { height: 2, width: 3 };
        const actual: BoardDimensionsType = getBoardDimensions(data);
        expect(actual).toEqual(expected);
    })
})