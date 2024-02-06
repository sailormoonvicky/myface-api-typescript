import React, {useEffect, useState} from "react";


export const PostGallery: React.FC = () => {
    const [postLists, setPostLists] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(data =>setPostLists(data.results))
    }, [])


    return (
        <>
            <div className="banner"><h1>Posts</h1></div>
            <div className="posts">
                <ol>
                {postLists.map((post) => (
                    <li key={post.id}>
                        <img src={post.imageUrl} alt={`A image with post id ${post.id}`} />
                        <div>
                            <p className="username">by {post.postedBy.username}</p>
                            <p className="timestamp">{post.createdAt}</p>
                            <p className="message">{post.message}</p>
                        </div>
                    </li>
                ))}
                </ol>
            </div>
        </>
    )
}