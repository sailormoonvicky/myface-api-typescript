import { useState, FormEventHandler, ChangeEventHandler } from "react";
import { CreateUserRequest } from "../../../src/models/api/createUserRequest";

export const CreateUser:React.FC = () => {
    const [inputs, setInputs] = useState<CreateUserRequest>({
        name: undefined || '',
        username: undefined || '',
        profileImageUrl: undefined || '',
        coverImageUrl: undefined || '',
        email: undefined || ''
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const {name, value} = event.target;
        setInputs(values => ({...values, [name]: value}))
      
    }
    const usernameCheckValidity =() => {
        const regex = /^[a-z]+$/;
        return regex.test(inputs.username);
      }
    
      const emailCheckValidity =() => {
        const regex = /[.'_%\-+A-Za-z0-9]+@\w+([-.]?\w+)*(\.\w{2,3})+/;
        return regex.test(inputs.email);
      }
    
    const validateForm = () => {
        let errMsg = '';
        let ifValid = true;
        //Check none of the values are null
        Object.entries(inputs).forEach(([k, v]) => {
            if(v===undefined || v===''){
                errMsg = errMsg + 'Please enter ' + k + '<br />';
                ifValid = false;      
            }
        });

        //Check for valid email id
        if(!emailCheckValidity()){
            ifValid = false;
            errMsg = errMsg + 'Please enter a valid Email ID' + '<br />';
        }
        //Check for valid email id
        if(!usernameCheckValidity()){
            ifValid = false;
            errMsg = errMsg + 'Please enter a valid username (lower case letters only without spaces)' + '<br />';
        }
        console.log('-->',errMsg)
        let element = document.getElementById("divError");
        if(element!==null)
            {element.innerHTML = errMsg;}
        return ifValid;        
      };

    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        
        if(validateForm()){
            fetch("http://localhost:3001/users/create/", {
            method: 'POST',
            body: JSON.stringify(inputs),   
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },          
            })
            .then((response) => {
                if (response.status !== 200) {
                throw new Error(response.statusText);
                }                   
            })
            .then(() => {
                console.log("We'll be in touch soon.");
            })
            .catch((err) => {
                console.log(err.toString());
            });
        }
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
            />
            </label>
            <label>Enter your username:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your Profile Image URL:
            <input 
                type="text" 
                name="profileImageUrl" 
                value={inputs.profileImageUrl || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your Cover Image URL:
            <input 
                type="text" 
                name="coverImageUrl" 
                value={inputs.coverImageUrl || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your Email ID:
            <input 
                type="email" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
            />
            </label>
          <button type="submit">Submit</button>
        </form>
        <div id="divError"></div>
        </>
    )
}

