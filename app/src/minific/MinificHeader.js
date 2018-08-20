import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './minific.css';

class MinificHeader extends Component{
    constructor(){
        super();
        this.store = {
            activeMenu: 'home'
        }
    }

    render(){
        return (
            <header>
                <div id="logo-menu-container">
                    <a href="#" id="menu-button" onClick={() => this.toggleMenu()}><i className="fa fa-bars"></i></a> 

                    <div id="logo">
                    <h1>MCTIC</h1>
                    <h2>DESFAZIMENTO</h2>
                    </div>
                </div>    
                <div id="menu-container">     
                    <div id="menu" className="active">  
                        <div id="busca-container">   
                            <input type="search" id="input-busca" placeholder="Digite para buscar" required/>  
                            <i className="fa fa-search"></i> 
                        </div>
                        <div className="profile-container">
                            <a className="profile-pic" href="#">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13913/profile/profile-80.jpg?1" alt="Profile pic" />
                            </a>
                            <i className="fa fa-ellipsis-v"></i>
                        </div>
                
                        <nav>
                            <ul> 
                            <li id="link-home" className="active">
                                <Link to="/" onClick={() => this.setActiveMenu('#link-home')}>
                                    <i className="fa fa-home"></i><span>Entrada</span>
                                </Link>
                            </li>
                            <li><a href="#"><i className="fa fa-list-alt"></i><span>Listas</span></a></li> 
                            <li><a href="#"><i className="fa fa-hotel"></i><span>Órgãos</span></a></li>
                            <li><a href="#"><i className="fa fa-hands"></i><span>Acompanhamento</span></a></li>
                            <li><a href="#"><i className="fa fa-chart-area"></i><span>Relatórios</span></a></li> 
                            <li id="link-gerenciamento">
                                <Link to="/gerenciamento" onClick={() => this.setActiveMenu('#link-gerenciamento')}>
                                    <i className="fa fa-database"></i><span>Gerenciamento</span>
                                </Link>
                            </li>
                            <li><a href="#"><i className="fa fa-cog"></i><span>Configurações</span></a></li> 
                            <li><a href="#"><i className="fa fa-question-circle"></i><span>Ajuda</span></a></li> 
                            <li><a href="#"><i className="fa fa-info-circle"></i><span>Sobre</span></a></li> 
                            </ul>
                        </nav>   
                    
                        <i id="menu-retract" className="fas fa-angle-left"></i>
                    </div>
                </div>  
            </header>
        );
    }

    toggleMenu(){
        let main = document.querySelector('main');
        let menuContainer = document.querySelector('#menu');
        let menuWidth = getComputedStyle(main).getPropertyValue('--opened-menu-width');
        let mainWidth = 100 - ~~menuWidth.replace('vw','') + 'vw';   

        if(menuContainer.className === 'hidden'){    
            main.style.width = mainWidth;
            main.style.left = menuWidth;           
            
            this._changeClass(menuContainer, 'active');
        } else {      
            main.style.width = '100vw';
            main.style.left = '0';  
            
            this._changeClass(menuContainer, 'hidden');
        }
    }

    setActiveMenu(activeMenu){
        document.querySelector('li.active').className = '';
        document.querySelector(activeMenu).className = 'active';
    }

    _changeClass(el, className){
        el.className = className;
    }
}

export default MinificHeader;