import React from "react";

const ShoesSizeForm = (props) => {
    return (
        <div>
            <form className="shoe-sizer">
                <label id="shoes-size">Rozmiar: </label>
                <select name="size" id="shoe-size" onChange={props.onSelectionChange} value={props.value}>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                </select>
            </form>
        </div>
    )
};

export default ShoesSizeForm;