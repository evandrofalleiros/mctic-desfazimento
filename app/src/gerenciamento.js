import React, { Component } from 'react';

class Gerenciamento extends Component{
    render(){
        return (
            <div className="container">
                <h1 className="title-bar">Gerenciamento</h1>
                <div className="context-bar">
                    <ul>
                        <li><a href="#" className="active">Geral</a></li>
                        <li><a href="#">Computadores</a></li>
                        <li><a href="#">Monitores</a></li>
                        <li><a href="#">Impressoras</a></li>
                        <li><a href="#">Mobiliários</a></li>
                        <li><a href="#">Outros</a></li>
                    </ul>
                </div>              

                <div className="content">
                
                </div>              
            </div>
        );
    }
}

export default Gerenciamento;