
import {IPosts} from "../../models/IPosts.ts";
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.tsx";
import {IBaseResponseModel} from "../../models/IBaseResponseModule.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
       getAll<IBaseResponseModel & {posts:IPosts[]}>('/posts')
           .then(({posts})=>setPosts(posts))
    }, []);

    return (
    <>
        {
            posts.map(post => <PostComponent key={post.id} item={post}/>)
        }
    </>
    );

};

export default PostsComponent;