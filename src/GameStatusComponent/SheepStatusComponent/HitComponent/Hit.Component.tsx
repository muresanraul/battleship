import './Hit.Component.scss';
import cruiserShape from './../../../assets/HitSmall.png'

type HitComponentPropsType = {
    isHit: boolean
  }

function HitComponent({isHit}: HitComponentPropsType){
    const statusClass =  isHit ? 'hit' : 'miss';
    return (
      <div className={`HitComponent ${statusClass}`}>
          <img src={cruiserShape} alt="" />
      </div>
    )
  }

  export default HitComponent;