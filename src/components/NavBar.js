import { Link, useLocation } from 'react-router-dom'

import { useState } from "react"
import Sidebar from "./Sidebar"

import  { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()
  const links = [
    {
      name: 'Домой',
      path: '/',
      icon: faHome
    },
    {
      name: 'Рецепты',
      path: '/recepies',
      icon: faList
    },
    {
      name: 'Настройки',
      path: '/settings',
      icon: faCog
    }
  ]

  function closeSideBar(){
    setShowSidebar(false)
  }

  return(
    <>
      <div className="navbar conteiner">
        <Link to='/' className="logo" >Гу<span>Р</span>маны</Link>
        <div className="nav-links">
          {links.map(link => (
            <Link className={location.pathname === link.path ? 'active' : ''} to={link.path} href={link.path} key={link.name}>{link.name}</Link>
          ))}

        </div>
        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "burger-btn active" : 'burger-btn'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSideBar} links={links}/>}
      {/* <Sidebar links={links}/> */}
    </>
  )
}