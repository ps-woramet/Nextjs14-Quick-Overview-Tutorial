'use client'

import { useEffect, useState } from "react"
import { submitForm } from "./action"

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    if(!res.ok){
        throw new Error('cannot fetch api')
    }
    return res.json()
}

const UserPage = () => {

    const [myData, setMyData] = useState([])

    const initData = async()=>{
        try{
            const result = await getData()
            setMyData(result)
        }catch(error){
            console.log('error', error);
        }
    }

    useEffect(()=>{
        initData()
    }, [])

    console.log(myData);

    return (<div>
        {myData.map((data, index)=>(
            <div key={index}>
                {data.id} {data.email}
            </div>
        ))}
        this is csr page
        <form action={submitForm}>Email
            <input style={{border: 'solid black 1px'}} name="email" />
            <button>Submit</button>
        </form>
    </div>)
}
 
export default UserPage;