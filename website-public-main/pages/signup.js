import style from "../styles/About.module.css";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function SignUp() {
    const router = useRouter();

    const [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch('http://192.168.49.2:31234/auth/signup', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            alert('Success');
            router.push('/signin');
        } else {
            const errorText = await res.text();
            alert(`Error: ${errorText}`);
        }
    }

    return (
        <>
            <Head>
                <title>Sign up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.containerSign}>
                <div className={style.form}>
                    <h1>Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                value={state.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
