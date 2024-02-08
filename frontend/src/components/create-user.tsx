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

    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(inputs)
        fetch("http://localhost:3001/users/create", {
          method: 'POST',
          body: JSON.stringify(inputs),          
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
    
            return response.json();
          })
          .then(() => {
            console.log("We'll be in touch soon.");
          })
          .catch((err) => {
            console.log(err.toString());
          });
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
        </>
    )
}

