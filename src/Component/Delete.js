import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Styles/display.css"

function Home({loadsearch}) {
    const [cert ,setCert] = React.useState('')
    const [message , setmessage] =React.useState("")

    let history = useHistory()

    const onsubmit = (e) =>{
         e.preventDefault()
         fetch("https://certificateverify.herokuapp.com/delete",{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
                cert : cert,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user === "user") { 
                    history.push(`/adminhome`);
                }else{
                    setmessage("Invalid Certificate number")  
                }
                
            })
            
    }
    return (
        <div className ="bod">
        <div className ="apps">
            <form onSubmit ={onsubmit}>
            <h3>
             DELETE CERTIFICATE
             </h3>
             <div className="form-group">
              <input
              className = "form-control"
               type = 'text'
               placeholder="Enter Certificate Number"
               value= {cert}
               onChange = {(e)=>setCert(e.target.value)}
              />
              </div>
             <div style={{fontSize:20 , color:"red"}}>
                 {message}
                </div>
               <div className="button">
              <button
              onSubmit ={onsubmit}
              >DELETE</button>  
              </div>
            </form>

            
        </div>
        
        </div>
    )
}

export default Home
