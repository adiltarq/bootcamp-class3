import React from 'react';

function Dinner (props){
    return(
        <div>
    <h1>Today we have {props.DishName}</h1>
    <h1>Today we are also have sweets {props.sweetDish}</h1>
    </div>
    )
}
export default Dinner;