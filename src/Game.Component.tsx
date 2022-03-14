import { useEffect, useState } from 'react';
import './Game.Component.scss';
import PlayBoardComponent from './PlayBoardComponent/PlayBoard.Component';
import GameStatusComponent from './GameStatusComponent/GameStatus.Component';
import { gameData } from './services/data';
import { GameLayoutBoardType, ShipPlacementsType, shipTypesType } from './shared.types';
import { generateLayoutArea, checkTargetHit, getUpdatedLayoutAreaData, getUpdatedStatusData } from './services/service';
import GameHeaderComponent from './GameHeaderComponent/GameHeader.Component';

function GameComponent() {
  const [{ shipTypes, layout: shipPlacements }, setGameData]: [{ shipTypes: shipTypesType, layout: ShipPlacementsType }, Function] = useState({ shipTypes: {}, layout: [] });
  const [layoutAreaData, setLayoutAreaData]: [GameLayoutBoardType, Function] = useState([]);

  useEffect(() => {
    const shipPlacements = JSON.parse(gameData);
    const layoutAreaData: GameLayoutBoardType = generateLayoutArea(10, 10);

    setGameData(shipPlacements);
    setLayoutAreaData(layoutAreaData);
  }, []);

  const gameChange = (idCheck: string) => {
    const indexCheck = layoutAreaData.findIndex(item => item.id === idCheck)
    const checkElement = { ...layoutAreaData[indexCheck] };
    const isTargetHit = checkTargetHit(checkElement, shipPlacements);
    const newShipPlacements = getUpdatedLayoutAreaData(indexCheck, layoutAreaData, isTargetHit);
    setLayoutAreaData(newShipPlacements);
  }
  const playAgain = () => {
    const layoutAreaData: GameLayoutBoardType = generateLayoutArea(10, 10);
    setLayoutAreaData(layoutAreaData);
  }

  const shipStatusData = getUpdatedStatusData(shipTypes, shipPlacements, layoutAreaData);
  return (
    <div className="GameComponent">
      <GameHeaderComponent
        sheepStatusList={shipStatusData}
        onPlayAgain={playAgain}
      />
      <div className="GameComponent__content">
        <GameStatusComponent sheepStatusList={shipStatusData} />
        <PlayBoardComponent
          layoutAreaData={layoutAreaData}
          onChange={gameChange}
        />
      </div>

    </div>
  );
}

export default GameComponent;
