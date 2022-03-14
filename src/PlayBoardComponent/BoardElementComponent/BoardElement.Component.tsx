import { GameLayoutUnitStatus, GameLayoutUnitType } from '../../shared.types';
import './BoardElement.Component.scss';
import HitSmall from './../../assets/HitSmall.png'
import MissSmall from './../../assets/MissSmall.png'

type BoardElementComponentPropsType = {
  data: GameLayoutUnitType
}
function BoardElementComponent({ data }: BoardElementComponentPropsType) {
  const { status } = data;
  return (
    <div
      className={`BoardElementComponent status__${status}`}
    >
      {status === GameLayoutUnitStatus.hit && <img src={HitSmall} alt="" />}
      {status === GameLayoutUnitStatus.miss  && <img src={MissSmall} alt="" />}
    </div>
  )
}
export default BoardElementComponent;
