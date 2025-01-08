import {IPosts} from "../../models/IPosts.ts";

type PostsType={
    item:IPosts
}

const PostComponent = ({item}:PostsType) => {
    return (
        <div>
            {item.title}
            
            </div>
    );
};

export default PostComponent;