import React from 'react';
import {useState, useEffect} from "react"
import LoginButton from "./LoginButton";

const Login = (props) => {
    const initialState = {
        // email: props.data.email,
        // password: props.data.password
        email: "",
        password: ""
    }
    const [errors, setErrors] = useState([]);
    const [form, setForm] = useState(initialState);

    const changeData = (e) => {
        console.log(e.target.email, e.target.value);
        e.persist();
        setForm(prevForm => {
            return {
                ...prevForm,
                [e.target.email]: e.target.value
            }
        })
    };

    const validate = () => {
        const errors = [];
        let isValidate = true;

        // if (form.email !== props.data.email) {
        //     isValidate = false;
        //     errors.push(<LoginButton/>)
        // }
        // if (form.email !== props.data.email) {
        //     isValidate = false;
        //     errors.push(<LoginButton/>)
        // }
        if (form.email < 3 || form.password < 3) {
            isValidate = true;
            errors.push(<LoginButton/>)
        }

        setErrors(errors);
        return isValidate
    };

    const postUser = data => {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9rTA7I8cyVV18Z4A_yk4OkupNo7EZ8uk'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response)
                setForm(initialState)
            })
    };

    const save = event => {
        event.preventDefault();
        // postUser(authData)
        if (validate ()) {
            postUser()
        }
    };

    return (
        <>
        <section className="login-main">
            <div className="container login-content">
                <div className="form-div">
                    <form onSubmit={save}>
                        <label id="email"><span>E</span> - mail
                            <input type="text" name="email" className="login-input"/>
                        </label>
                        <label id="password"><span>H</span>asło
                            <input type="password" name="password" className="password-input"/>
                        </label>
                        <button className="login-btn">Zaloguj się!</button>
                        <div>{errors}</div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
};

export default Login;