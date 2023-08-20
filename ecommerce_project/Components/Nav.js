import React from 'react'

const Nav = () => {
    return (
        <nav>

            <div className="logo">

                <h1>Watchoshop</h1>
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Feature</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                    <li><button>Buy now</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav