import React from 'react';
import '../stylesheets/leftPanel.css';

const listItems = ["Users" , "Repositories"];

function LeftPanel(props){
    const items = listItems.map((x, index) => {
        return props.active === index ? 
                        <li key = {index} className = "active menu-selection" > {x} </li>
                    : 
                    <li key = {index} className ="menu-selection" onClick = {() => props.handleCategory(index)}>{x}</li> 
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