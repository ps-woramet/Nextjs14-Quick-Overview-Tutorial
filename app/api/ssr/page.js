async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    if(!res.ok){
        throw new Error('cannot fetch api')
    }
    return res.json()
}

const UserPage = async() => {

    const myData = await getData()
    myData.map((data, index)=>{
        console.log(data.id);
    })
    return (<div>
        {myData.map((data, index)=>(
            <div key={index}>
                {data.id} {data.email}
            </div>
        ))}
        
        this is ssr page
    </div>);
}
 
export default UserPage;