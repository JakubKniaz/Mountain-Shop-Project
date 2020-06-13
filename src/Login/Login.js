import React, {useState, useContext} from 'react';
import { ShopContext } from '../context/shop-context';

const Login = (props) => {
    const login = useContext(ShopContext).shopLogin;
    const initialState = {
        email: "",
        password: ""
    };
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(initialState);

    const changeData = (e) => {
        console.log(e.target.email, e.target.value);
        e.persist();
        setData(prevData => {
            return {
                ...prevData,
                [e.target.email]: e.target.value
            }
        })
    };

    const postUser = data => {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9rTA7I8cyVV18Z4A_yk4OkupNo7EZ8uk'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(initialState);
                login(response.userId);
                props.history.replace('/')
            })
            .catch( err => {
                setErrors(err.message)
                console.log(err.message)

            })
    };

    const validate = () => {
        const errors = [];
        let isValidate = true;

        if (!data.email || !data.password) {
            isValidate = false;
            errors.push(" Wszystkie pola powinny być wypełnione")
        }
        if (data.email.length < 3 && !data.email.includes("@")) {
            isValidate = false;
            errors.push(" E-mail powinien zawierać co najmniej 3 znaki i znak @!")
        }
        if (data.password.length < 5) {
            isValidate = true;
            errors.push(" Hasło powinno zawierać co najmniej 5 liter!")
        }
        setErrors(errors);
        return isValidate
    };

    const save = (e) => {
        e.preventDefault();
        const authData = {
            email: data.email,
            password: data.password
        };

        if (validate ()) {
            postUser(authData);
        }
    };

    const onRegistrationBtn = () => {
        props.history.push('/registration')

    };

    return (
        <>
            <section className="login-main">
                <div className="container login-content">
                    <div className="form-div">
                        <form onSubmit={save}>
                            <label id="email"><span>E</span> - mail
                                <input type="email" name="email" className="login-input" onClick={changeData}/>
                            </label>
                            <label id="password"><span>H</span>asło
                                <input type="password" name="password" className="password-input" onClick={changeData}/>
                            </label>
                            <button type="submit" className="login-btn">Zaloguj się!</button>
                        </form>
                    </div>
                    {errors ? <h4>{errors}</h4> : null }
                    <button type="submit" className="login-btn" onClick={onRegistrationBtn}>Zarejestruj się!</button>
                </div>
            </section>
        </>
    )
};

export default Login;