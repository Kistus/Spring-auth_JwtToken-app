import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import router from 'next/router'

const Nav = () => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        setToken(storedToken)
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
        router.push("/")
    }

    return (
        <>
            <Script src="../js/toggle.js" />
            <nav className="navbar-links">
                <ul className="nav-links">
                    {token && <li><Link href="/user">User</Link></li>}
                    {token && <li><a onClick={logout}>LogOut</a></li>}
                    {!token && <li><Link href="/signin">SignIn</Link></li>}
                    {!token && <li><Link href="/signup">SignUp</Link></li>}
                    <li><Link href="/about">About me</Link></li>
                    <li><a href="https://kistus.github.io/CV/" target="_blank" rel="noreferrer">My CV</a></li>
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

export default Nav
