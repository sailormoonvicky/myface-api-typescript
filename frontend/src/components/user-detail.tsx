import React, {useEffect, useState} from "react";


export const UserDetail: React.FC<{userID: number}> = (props:{userID: number}) => {
    const [userDetail, setuserDetail] = useState<any>({});

    useEffect(() => {
        fetch(`http://localhost:3001/users/${props.userID}`)
        .then(response => response.json())
        .then(data => setuserDetail(data))
    }, [props.userID])

    return(
        <>
        <ul>
            <li>ID: {userDetail.id}</li>
            <li>Username: {userDetail.username}</li>
            <li>Full Name: {userDetail.name}</li>
            <li>Email: {userDetail.email}</li>
            <li><img src={userDetail.coverImageUrl} alt="This is profile image"/></li>
            <li><img src={userDetail.profileImageUrl} alt="This is cover image"/></li>
        </ul>
        </>
    )
}