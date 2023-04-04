import { useEffect, useState } from "react"

export default function GetApi(){
  const [comment,setComment]=useState({name:"",email:"",phone:""})
    const [state,setState] = useState([""]);
    const getapi= async()=>{
        const response = await fetch("../api");
        const data = await response.json();
        console.log(data)
        setState(data);
    } 

    const postapi= async()=>{
      const response = await fetch("../api",{
        method : "POSt",
        body : JSON.stringify({comment}),
        headers :{
          'Content-Type': "application/json"
        },
      })
      const data = await response.json();
      console.log(data)
      getapi();
    }
    return(
        <div style={{textAlign:"center"}} >
          <button onClick={getapi} >
            GetApi
            </button> <br/> <br/>
            <input type="text" name="comment" value={comment.name} onChange={(e)=>
              setComment({...comment,name:e.target.value})} placeholder="name" />
              &nbsp;
              <input type="text" name="email" value={comment.email} onChange={(e)=>
              setComment({...comment,email:e.target.value})} placeholder="email" />
              &nbsp;
              <input type="text" name="phone" value={comment.phone} onChange={(e)=>
              setComment({...comment,phone:e.target.value})} placeholder="phone" /> <br/>
            <button onClick={postapi} >POST</button>
           <div>
           {
              state.map((item)=>{
                return <div>
                  <h4>{item.name}</h4>
                  <h4>{item.email}</h4>
                  <h4>{item.phone}</h4> <br/>
                </div> 
              })
            }
           </div>
        </div>
    )
}