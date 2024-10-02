import { route } from 'next/dist/next-server/server/router'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import { useEffect } from 'react'

import router from 'next/router'

const Nav = () => {

    const [item , setItem] = useState("")
    useEffect(() => {
        console.log(localStorage.getItem("token"))
        setItem(localStorage.getItem("token"))
    }, [])


    function logout() {
        localStorage.removeItem("token")
        router.push("/index")
    }

    return (
        <>
        <Script src="../js/toggle.js"></Script>
        <nav className="navbar-links">
            <ul className="nav-links">
                {
                    item !== null ?
                    <li><Link href="/user">User</Link></li>
                    : null
                }
                {
                    item !== null ?
                    <li onClick={logout}><Link href="/">LogOut</Link></li>
                    : null
                }
                <li><Link href="/signin">SignIn</Link></li>
                <li><Link href="/signup">SignUp</Link></li>
                <li><Link href="/about">About me</Link></li>
                <li><a href="https://kistus.github.io/CV/" target="blank">My CV</a>
                </li>
            </ul>
            <a className="burg">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </a>
        </nav>
    </>
    )
}

export default Nav;