import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { useEffect, useState, ChangeEvent } from 'react';
import { BoardDimensionsType, GameLayoutBoardType, GameLayoutUnitStatus, GameLayoutUnitType } from '../shared.types';
import BoardElementComponent from './BoardElementComponent/BoardElement.Component';
import './PlayBoard.Component.scss';
import { getBoardDimensions } from './PlayBoard.Service';

type PlayBoardComponentPropsType = {
  layoutAreaData: GameLayoutBoardType,
  onChange: Function
}
function PlayBoardComponent(props: PlayBoardComponentPropsType) {

  const { layoutAreaData, onChange } = props;

  const [{ width }, setlayoutDimensions]: [BoardDimensionsType, Function] = useState({ height: 0, width: 0 });
  useEffect(() => {
    if (layoutAreaData.length) {
      const dimensions: { height: number; width: number } = getBoardDimensions(layoutAreaData);
      setlayoutDimensions(dimensions)
    }
  }, [layoutAreaData]);

  const elementStyle = {
    width: `calc(100% / ${width})`,
  }

  const checkUnit = function (e: ChangeEvent<any>) {
    if(e.currentTarget.getAttribute("data-status") !== GameLayoutUnitStatus.clear) return;
    const data_id = e.currentTarget.getAttribute("data-id");
    onChange(data_id)
  }

  return (
    <div className="PlayBoardComponent">
      <div className="PlayBoardComponent__content_box">
        {layoutAreaData.length ? layoutAreaData.map((element: GameLayoutUnitType, i: number) => (
          <div
            key={element.id}
            data-id={element.id}
            data-status={element.status}
            onClick={checkUnit}
            className="PlayBoardComponent__Element"
            style={elementStyle}
          >
            <BoardElementComponent data={element} />
          </div>
        ))
          : null}
      </div>

    </div>
  )
}
export default PlayBoardComponent;
