import React from 'react';
import '../stylesheets/leftPanel.css';

const listItems = ["Users" , "Repositories"];

function LeftPanel(props){
    const items = listItems.map((x, index) => {
        return <li
                key = {index}
                className = {props.active === index ? "active menu-selection" : "menu-selection"}
                onClick = {() => props.handleCategory(index)}>
                {x}
        </li>
    })
    return(
        <>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default LeftPanel