import { SheepStatusListType } from '../shared.types';
import './GameHeader.Component.scss';
import { getKillCount } from './GameHeader.Service';

type GameHeaderComponentPropsType = {
  sheepStatusList: SheepStatusListType;
  onPlayAgain: Function;
}
function GameHeaderComponent(props: GameHeaderComponentPropsType) {
  const { sheepStatusList, onPlayAgain } = props;
  const killCount = getKillCount(sheepStatusList);
const restartAction = () => {onPlayAgain()}
  return (
    <div className='GameHeaderComponent'>
      <div className='GameHeaderComponent__title'>
        Battleship
      </div>
      <div className='GameHeaderComponent__body'>
        <div className='GameHeaderComponent__killCounmt'>
        Score: {sheepStatusList.length} / {killCount}
      </div>
      {sheepStatusList.length === killCount && <div className='GameHeaderComponent__interface'>
        <div className='GameHeaderComponent__message'>YOU WIN!</div>
        <div><button type="button" onClick={restartAction}>Play again</button></div>
      </div>}
      </div>
    </div>
  )
}

export default GameHeaderComponent;