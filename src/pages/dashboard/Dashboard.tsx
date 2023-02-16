import { FunctionComponent } from 'react';
import logo from './../../assets/logo.png';
import './dashboard.css'
import { BiRun, MdSpaceDashboard, FaBuilding, GiStairsGoal, IoIosNotifications, FaUserAlt, RiLogoutBoxFill } from "react-icons/all"
import ListRunner from '../../components/ListRunner';

export const Dashboard: FunctionComponent = () => {

  let date = new Date();
  let options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  let formattedDate = date.toLocaleDateString('es-ES', options);

  return (
    <>
      <div className="page">
        <header>Dashboard
          <p>{formattedDate}</p>
        </header>
        <aside>
          <div className="header_aside">
            <img src={logo} alt="LogoAriwonto" style={{ maxWidth: "80%", maxHeight: "80%" }} />
            <span>Ariwonto Runners</span>
          </div>
          <ul className='list_dashboard'>
            <li><a href=""><MdSpaceDashboard />Dashboard</a></li>
            <li><a href=""><BiRun />Corredores</a></li>
            <li><a href=""><FaBuilding />Patrocinadores</a></li>
            <li><a href=""><GiStairsGoal />Carreras</a></li>
            <li><a href=""><IoIosNotifications />Notificaciones</a></li>
            <li><a href=""><FaUserAlt />Perfil</a></li>
            <li><a href=""><RiLogoutBoxFill />Cerrar Seccion</a></li>
          </ul>
        </aside>
        <main>
          <ListRunner/>
        </main>
      </div>
    </>
  )
}
