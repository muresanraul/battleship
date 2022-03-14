import './SheepStatus.Component.scss';


import destroyer from './../../assets/destroyerShape.png'
import battleship from './../../assets/battleshipShape.png'
import carrier from './../../assets/carrierShape.png'
import cruiser from './../../assets/cruiserShape.png'
import submarine from './../../assets/submarineShape.png'

import HitComponent from './HitComponent/Hit.Component';
import { getHitsArr } from './SheepStatus.Service';
import { SheepStatusItemType } from '../../shared.types';

type SheepStatusComponentPropsType = {
  data: SheepStatusItemType
}

function SheepStatusComponent({data}: SheepStatusComponentPropsType){
  const hits = getHitsArr(data);
  return (
    <div className='SheepStatusComponent'>
 
      <div className='SheepStatusComponent__imgContainer'>
        {data.name === 'destroyer' && <img src={destroyer} className="destroyer" alt="destroyer" />}
        {data.name === 'battleship' && <img src={battleship} className="battleship" alt="battleship" />}
        {data.name === 'carrier' && <img src={carrier} className="carrier" alt="carrier" />}
        {data.name === 'cruiser' && <img src={cruiser} className="cruiser" alt="cruiser" />}
        {data.name === 'submarine' && <img src={submarine} className="submarine" alt="submarine" />}
      </div>

      <div className='SheepStatusComponent__hitsBox'>
        {hits.map((element: boolean, i: number) => (
          <div
            key={i}
            className="SheepStatusComponent__element"
          >
            <HitComponent isHit={element} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SheepStatusComponent;