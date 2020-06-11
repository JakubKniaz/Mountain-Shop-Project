import React from "react";

const ClothesSizeForm = () => {
    return (
        <div>
            <form className="clothes-sizer">
                <label id="main-size">Rozmiar: </label>
                <select name="size" id="cloth-size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </form>
        </div>
    )
};

export default ClothesSizeForm;