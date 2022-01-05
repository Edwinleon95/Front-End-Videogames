import React from "react";


const Sort = (props) => {

    const { onChange } = props
    return (
        <div>
            <div><span>odenar por</span></div>

            <div> <select onChange={onChange}>
                <option value='ordenaraz' >ordenaraz</option>
                <option value='ordenarza'>ordenarza</option>
                <option value='ordenarAsc'>mayor a menor</option>
                <option value='ordenarDes'>menor a mayor</option>
            </select></div>
        </div>
    )
}

export default Sort;