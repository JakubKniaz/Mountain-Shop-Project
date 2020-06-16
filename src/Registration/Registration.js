import React, {useState, useContext} from 'react';
import { ShopContext } from '../context/shop-context';

const Registration = ( props ) => {
    const login = useContext(ShopContext).shopLogin;
    const initialState = {
        name: "",
        surname: "",
        email: "",
        login: "",
        password: "",
        street: "",
        code: "",
        city: ""
    };
    const [data, setData] = useState(initialState)
    const [errors, setErrors] = useState([]);

    const changeData = (e) => {
        console.log(e.target.name, e.target.value);
        e.persist();
        setData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    };

    const validate = ( ) => {
        const errors = [];
        let isValidate = true;

        if(!data.name || !data.surname || !data.email || !data.login || !data.password || !data.street || !data.code || !data.city) {
            isValidate = false;
            errors.push(" Wszystkie pola powinny być wypełnione!")
        }
        if (data.name.length < 3) {
            isValidate = false;
            errors.push(" Imię powinno zawierać co najmniej 3 litery!")
        }
        if (data.surname.length < 3) {
            isValidate = false;
            errors.push(" Nazwisko powinno zawierać co najmniej 3 litery!")
        }
        if (data.email.length < 3 && !data.email.includes("@")) {
            isValidate = false;
            errors.push(" E-mail powinien zawierać co najmniej 3 znaki i znak @!")
        }
        if (data.login.length < 3) {
            isValidate = false;
            errors.push(" Login powinien zawierać co najmniej 3 litery!")
        }
        if (data.password.length < 6) {
            isValidate = false;
            errors.push(" Hasło powinno zawierać co najmniej 6 liter!")
        }
        if (data.street.length < 3) {
            isValidate = false;
            errors.push(" Nazwa ulicy powinna zawierać co najmniej 3 litery!")
        }
        if (data.code.length !== 5) {
            isValidate = false;
            errors.push(" Kod powinien mieć 5 znaków")
        }
        if (data.city.length < 3) {
            isValidate = false;
            errors.push(" Nazwa miasta powinna zawierać co najmniej 3 litery!")
        }
        setErrors(errors);
        return isValidate
    }

    const postUser = data => {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9rTA7I8cyVV18Z4A_yk4OkupNo7EZ8uk'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                if ( response.error && response.error.code >= 400 && response.error.code <= 500 ) {
                    throw new Error(response.error.message)
                } else {
                    setData(initialState);
                    login(response.localId);
                    props.history.replace('/')
                }
            })
            .catch( err => {
                setErrors(err.message);
            })
    };

    const save = event => {
        event.preventDefault();
        const authData = {
            email: data.email,
            password: data.password,
            returnSecureToken: false
        };

        if (validate ()) {
            postUser(authData);
        }
    };
    return (
        <section className="registration-main">
            <div className="container registration-content">
                <div className="registration-div">
                    <form onSubmit={save}>
                        <span className="person-data">Dane osobowe</span>
                        <label id="name"><span>I</span>mię
                            <input type="text" name="name" className="name-input" value={data.name} onChange={changeData}/>
                        </label>
                        <label id="surname"><span>N</span>azwisko
                            <input type="text" name="surname" className="surname-input" value={data.surname} onChange={changeData}/>
                        </label>
                        <label id="email"><span>E</span> - mail
                            <input type="email" name="email" className="email-input" value={data.email} onChange={changeData}/>
                        </label>
                        <label id="login"><span>L</span>ogin
                            <input type="text" name="login" className="login-input" value={data.login} onChange={changeData}/>
                        </label>
                        <label id="password"><span>H</span>asło
                            <input type="password" name="password" className="password-input" value={data.password} onChange={changeData}/>
                        </label>
                        <span className="address-form">Adres</span>
                        <label id="street"><span>U</span>lica
                            <input type="text" name="street" className="street-input" value={data.street} onChange={changeData}/>
                        </label>
                        <label id="code"><span>K</span>od Pocztowy
                            <input type="text" name="code" className="code-input" value={data.code} onChange={changeData}/>
                        </label>
                        <label id="city"><span>M</span>iasto
                            <input type="text" name="city" className="city-input" value={data.city} onChange={changeData}/>
                        </label>
                        <button type="submit" className="registration-btn">Zarejestruj się!</button>
                    </form>
                </div>
                <h2 className="reg-errors">{errors}</h2>
            </div>
        </section>
    )
};

export default Registration;