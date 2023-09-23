import { useLoaderData } from "react-router-dom";
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>Posts: {data.length}</h2>
            <div className="posts">
                {
                    data.map((singleData)=> <Post key={singleData.id} post={singleData}></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;