import React, {useState} from "react";
import Navigation from "./Navigation.js";

function Header(){
    return (
    <div className="border-b flex p-3 justify-between items-center">
        <span className="font-bold">AppName</span>
        <Navigation />
    </div>
    )
}

export default Header;