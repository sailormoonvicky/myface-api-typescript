import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

export const UserList: React.FC<{setuserID: React.Dispatch<React.SetStateAction<number>>}> 
                                = (props:{setuserID: React.Dispatch<React.SetStateAction<number>>}) => {
    const [userLists, setUserLists] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data =>setUserLists(data.results))
    }, [])

    return (
        <>
            <h1>Users</h1>
            <ol>
                {userLists.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`} onClick={() => props.setuserID(user.id)}>
                        {user.name}
                        </Link>
                        <p>{user.id}</p>
                        <p>{user.username}</p>
                        <img src={user.profileImageUrl} alt="An user profile image" />
                        <p>Post: {user.posts.length} Likes: {user.likes.length} Dislikes: {user.dislikes.length} </p>
                    </li>
                ))}
            </ol>
        </>
    )

}