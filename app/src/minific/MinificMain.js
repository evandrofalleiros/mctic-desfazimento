import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './minific.css';

class MinificMain extends Component{
    
    constructor(props){
        super();
        this.routes = props.routes;
    }

    render(){
        return (
            <main>
                {this.routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </main>
        );
    }


}

export default MinificMain;