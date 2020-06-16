import React, {useState, useContext} from 'react';
import { ShopContext } from '../context/shop-context';

const Login = (props) => {
    const login = useContext(ShopContext).shopLogin;
    const initialState = {
        email: "",
        password: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState([]);

    const changeData = (e) => {
        e.persist();
        setData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
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

                if ( response.error && response.error.code >= 400 && response.error.code <= 500 ) {
                    throw new Error(response.error.message)
                } else {
                    setData(initialState);
                    login(response.localId);
                    props.history.replace('/')
                }

            })
            .catch( err => {
                let errMessage = '';
                if (err.message === 'EMAIL_NOT_FOUND' ) {
                    errMessage = 'Nieprawidłowy adres e-mail!'
                } else if ( err.message === 'INVALID_EMAIL' ) {
                    errMessage = 'Nie wprowadzono adresu e-mail!'
                } else if ( err.message === 'MISSING_PASSWORD' ) {
                    errMessage = 'Nie wprowadzono hasła!'
                } else if ( err.message === 'INVALID_PASSWORD' ) {
                    errMessage = 'Nieprawidłowe hasło!'
                } else {
                    errMessage = err.message
                }
                setErrors(errMessage);
            })
    };

    const save = (e) => {
        e.preventDefault();
        const authData = {
            email: data.email,
            password: data.password
        };

        postUser(authData);
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
                                <input type="email" name="email" className="login-email-input" value={data.email} onChange={changeData}/>
                            </label>
                            <label id="password"><span>H</span>asło
                                <input type="password" name="password" className="password-input" value={data.password} onChange={changeData}/>
                            </label>
                            <button type="submit" className="login-btn">Zaloguj się!</button>
                        </form>
                    </div>
                    {errors ? <h4 className="reg-errors">{errors}</h4> : null }
                    <button type="submit" className="second-log-btn" onClick={onRegistrationBtn}>Zarejestruj się!</button>
                </div>
            </section>
        </>
    )
};

export default Login;