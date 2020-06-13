import React from "react";

const QuantityForm = (props) => {
    return (
        <div>
            <form className="quantity" >
                <label className="guantity">Ilość: </label>
                <select name="multiple" id="multiple" onChange={props.onSelectionChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </form>
        </div>
    )
};

export default QuantityForm