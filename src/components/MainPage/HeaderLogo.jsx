import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
   return (
      <div id="headerLogo" className="header">
         <header className="header-container">
            <div className="header-logo">
               <NavLink className="header-logo-image" to="/" id="header-logo-image">Лого</NavLink>
            </div>
            <div className="header-logo-navbar">
               <div className="header-logo-navbar-list">
                  <a className="header-logo-navbar-item" href="#about" >О нас</a>
                  <a className="header-logo-navbar-item" href="#howItWorks" >Как это работает</a>
                  <a className="header-logo-navbar-item" href="#feedbacks" >Отзывы</a>
                  <a className="header-logo-navbar-item" href="#footer" >Контакты</a>
               </div>
            </div>
         </header>
      </div>
   );
}