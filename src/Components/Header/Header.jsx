import {React , useState , useEffect} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Styles from'./Header.module.css';
import profile from '../../Assets/me2.jpeg'
 import SideBarToggled from './SideBarToggled';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function Header() {
  const activeElement = ({isActive})=>{
    return {
      color:isActive ? '#A201FF':'#000000' ,
   }
  }
  const getCurrentDimension = ()=>{
    return {
      width:window.innerWidth
    }
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])
  return (
    <div>
    <header>
      <div className={Styles.logo_port}>
        <h1>
        Portfolio <i>KONUZ</i>
        </h1>
      </div>
      <div>
      {
        screenSize.width < 767 ?
        <div className={Styles.toggle}>
      <SideBarToggled />
      </div>: <nav>
        <ul>
          <li><NavLink style={activeElement}  to="/" >HOME</NavLink> </li>
          <li><NavLink style={activeElement} to="/about" >ABOUT</NavLink> </li>
          <li><NavLink style={activeElement} to="/projects" >PROJECTS</NavLink> </li>
          <li><NavLink style={activeElement} to="/contact">GET IN TOUCH</NavLink> </li>
        </ul>
      </nav>
      }
    </div>
      <div className={Styles.profile}>
        <Stack direction="row" spacing={2}>
       <Avatar alt="Travis Howard" src={profile} className={Styles.img_logo2}/>
       </Stack>
      </div>
      </header>
      <Outlet/>
      </div>
  )
}