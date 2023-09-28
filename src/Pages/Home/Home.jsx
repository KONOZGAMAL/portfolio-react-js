import React from 'react';
import profile from '../../Assets/me3.png'
import Style from'./Home.module.css';
export default function Home() {
  return (
    <div className={Style.home}>
       <div className={Style.details}>
        <span className={Style.intro}>
            Hello , I am
        </span>
        <div className={Style.name}>
           <div>
            <h1 className={Style.txt}>KO<br/>NU</h1>
           </div>
           <h1 className={Style.lg}>Z</h1>
         <div className={Style.stack}>
          FRONT END <b>DEVELOPER</b>
         </div>
        </div>
       </div>
       <div className={Style.profile_img}>
        <img fetchpriority="high" src={profile} alt="" className={Style.img__me}/>
          </div>
        </div>
  )
}
