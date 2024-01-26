import React from "react";

function List({children, direction, extraClass = ""}){
    let Directionclass = direction === "vertical" ? "d-flex flex-column" : "d-flex";

    return(
        <ul className={`list ${Directionclass} ${extraClass}`}>
            {
                React.Children.map(children, (child) => {
                    return(
                        <li className="list__item">{child}</li>
                    )
                })
            }
        </ul>
    )
}

export default List;