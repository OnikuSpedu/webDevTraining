import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    const transitions = useTransition(showMenu, null, {
        from: {position: 'absolute', opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })
    let menu;
    let menuMask;

    return (
        <nav>
            <span className="text-xl">
               <FontAwesomeIcon 
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
             /> 
            </span>
            {
                transitions.map(({item, key, props}) =>
                item &&
                <animated.div 
                key={key}
                style={props}
                className="bg-black-t-25 fixed top-0 left-0 h-full w-full z-50" 
                onClick={() => setShowMenu(!showMenu)} >
                </animated.div>
                )
            }
            {
                transitions.map(({item, key, props}) =>
                item &&
                <animated.div 
                key={key}
                style={props}
                className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" >
                    <ul>
                        <Link
                            to="/"
                            className="text-blue-500"
                            onClick = { () => setShowMenu(false)} 
                        >
                            Home
                        </Link>
                    </ul>
                    <ul>
                        <Link
                            to="/counter"
                            className="text-blue-500"
                            onClick = { () => setShowMenu(false)} 
                        >
                            Counter
                        </Link>
                    </ul>
                    
                </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation;