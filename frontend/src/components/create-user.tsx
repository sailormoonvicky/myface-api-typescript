import React, {useEffect, useState} from "react";

export const CreateUser:React.FC = () => {
    const [inputName, setInputName] = useState('')


    return (
        <>
            <div className="banner"><h1>Create User</h1></div>
            <div className="userForm">
                <form className="createUser" method="post" action="/users/create">
                    <label htmlFor="name">
                        Name:
                        <input id="name" type="text" name="name" value={inputName} onChange={(event) => setInputName(event.target.value)} required />
                    </label>
                    <label htmlFor="username">
                        Username:
                        <input id="username" type="text" name="username" required/>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input id="email" type="email" name="email" required/>
                    </label>
                    <label htmlFor="profileImageUrl">
                        ProfileImageUrl:
                        <input id="profileImageUrl" type="text" name="profileImageUrl"/>
                    </label>
                    <label htmlFor="coverImageUrl">
                        CoverImageUrl:
                        <input id="coverImageUrl" type="text" name="coverImageUrl" />
                    </label>
                    <button id="submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

// import {useState} from 'react';
 
// export default function  ControlledComponent()  {
// 	const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
// 	};

// return  (
// <form>
// 	<label>Input Value:
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
// 	<p>Input Value: {inputValue}</p>
// </div>
// )};