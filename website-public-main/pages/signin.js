
import style from "../styles/About.module.css"; 
import Head from "next/head";
import { useState } from "react"
import { useRouter } from 'next/router'
import Router from 'next/router'



export default function SignIn() {

        const router = useRouter()
        
        const [state, setState] = useState({
            username: '',
            password: ''
        })

        function fill(e) {
            const copy = {...state}
            copy[e.target.name] = e.target.value
            setState(copy)
        }
    
        async function handle() {
            localStorage.clear()
            const res = await fetch('http://localhost:8080/auth/signin', {
    
                method: 'POST',
                body: JSON.stringify(state),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        if(res.ok) {
            const json = await res.text()
            console.log(json)
            localStorage.setItem("token", json)
            router.push('/index')
        }
        else {

            alert("Wrong username or password")
        }
    }


return (

<>

<Head>
<title>Sign in</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" href="/favicon.ico" />
</Head>
<div className={style.containerSign}>
<div className={style.form}>
<h1>Sign in</h1>
<div>
<input type="text" name="username" placeholder="username" value={state.username} onChange={fill} autoComplete="off" /> </div>
<div>
<input type="password" name="password" placeholder="password" value={state.password} onChange={fill} /> 
</div>
<button onClick={handle}>Submit</button>
</div>
</div>
</>
);
}
