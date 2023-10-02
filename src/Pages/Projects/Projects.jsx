import {React} from 'react';
import Style from'./Projects.module.css';
import Data from '../../Data/Data'
export default function Projects() {
  return (
    <div className={Style.page}>
     {
      Data.map((e)=>(
        <div className={Style.card}>
          <h3>{e.name}</h3>
          <p>Using : {e.skills}</p>
          <img src={e.image} alt='logo' width={'180px'}/>
          <a href={e.link}>
          <button className={Style.btn}>Live</button>
          </a>
          <a href={e.git}>
          <button className={Style.btn}>GitHub</button>
          </a>
        </div>
      ))
     }
    </div>
  )
}