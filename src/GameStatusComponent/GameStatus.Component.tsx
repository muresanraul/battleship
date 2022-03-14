import './GameStatus.Component.scss';
import SheepStatusComponent from './SheepStatusComponent/SheepStatus.Component';
import { SheepStatusItemType, SheepStatusListType } from '../shared.types';

type GameStatusComponentPropsType = {
  sheepStatusList: SheepStatusListType
}

function GameStatusComponent({sheepStatusList}: GameStatusComponentPropsType) {
 
  return <div className="GameStatusComponent">
    {sheepStatusList.length ? sheepStatusList.map((element: SheepStatusItemType, i: number) => (
      <div
        key={i}
        className="GameStatusComponent__Element"
      >
        <SheepStatusComponent data={element} />
      </div>
    ))
      : null}
  </div>
}
export default GameStatusComponent;