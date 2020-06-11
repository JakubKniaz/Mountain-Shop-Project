import React from "react";

const ShoesSizeForm = () => {
    return (
        <div>
            <form className="shoe-sizer">
                <label id="shoes-size">Rozmiar: </label>
                <select name="size" id="shoe-size">
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                </select>
            </form>
        </div>
    )
};

export default ShoesSizeForm;