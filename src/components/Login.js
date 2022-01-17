import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState();
    return (
       <>
        <main>
            <label>USER: <input type="number" placeholder='Enter Your Number' value={user} onChange={(event)=>{
                setUser(event.target.value);
            }}></input></label>
        </main>
        <nav>
        <Link to="/chartList">ChartList</Link>
        </nav>
        </>
    )
}

export default Login
