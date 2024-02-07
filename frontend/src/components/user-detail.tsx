import React, {useEffect, useState} from "react";


export const UserDetail: React.FC<{userID: number}> = (props:{userID: number}) => {
    const [userDetail, setuserDetail] = useState<any>({});
    const [userPosts, setUserPosts] = useState<any>([]); 

    useEffect(() => {
        fetch(`http://localhost:3001/users/${props.userID}`)
        .then(response => response.json())
        .then(data => {setuserDetail(data), setUserPosts(data.posts != undefined ? data.posts.slice(0,6):[])})
    }, [props.userID])

    // let userPosts = userDetail.posts != undefined ? userDetail.posts.slice(0,6):[];

    function handleClick(){
        setUserPosts(userDetail.posts != undefined ? userDetail.posts:[]);
    }

    return(
        <>
        <div className="flexRow">
            <div className="flexColumn">
                <img className="coverImage" src={userDetail.coverImageUrl} alt="This is cover image"></img>
                <div className="flexAvatarContainer">
                    <img className="profileImage" src={userDetail.profileImageUrl} alt="This is cover image"></img>
                    <div className="textContainer">
                        <p className="fullName">{userDetail.name}</p>
                        <div className="alignTextLeft">
                            <div className="userName">{userDetail.username}</div>
                            <div className="email">{userDetail.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexColumn">                
                <p className="heading">{userDetail.name}'s Posts</p>
                <div className="flexCardsContainer">
                    {userPosts?.map((post: { imageUrl: string | undefined; id:number; createdAt: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                        <div className="flexCard" key={post.id}>
                            <img className="thumbNail" src={post.imageUrl} alt="Post Image"></img>
                            <div className="cardPadding">
                                <div className="alignTextLeft">
                                    <div className="userName">{userDetail.username}</div>
                                    <div>{post.createdAt}</div>
                                </div>
                                <div className="alignTextLeft topPadding">{post.message}</div>
                            </div>                            
                        </div>
                    )) || 'No posts found'} 
                </div>
                <div><button type="button" onClick={handleClick}>Load More</button></div>


            </div>
            <div className="flexColumn"><img className="coverImage" src={userDetail.coverImageUrl} alt="This is cover image"></img></div>
            <div className="flexColumn"><img className="coverImage" src={userDetail.coverImageUrl} alt="This is cover image"></img></div>
        </div>
        </>
    )
}

{/* <div className="flexColumn">                
                    <p className="heading">{userDetail.name}'s Posts</p>
                    <div className="flexCardsContainer">
                        {userDetail.posts?.map((post: { imageUrl: string; createdAt: string; message: string; }) => (
                            <div className="flexCard" key={post.createdAt}>
                                <div className="card">
                                    <img src={post.imageUrl} alt="Post"></img>
                                    <div>{post.createdAt}</div>
                                    <div>{post.message}</div>
                                </div>
                            </div>
                        )) || 'No posts found'} 
                    </div> */}