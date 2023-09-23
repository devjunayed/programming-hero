import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const params = useParams();
    const posts = useLoaderData();
    const navigate = useNavigate();

    console.log(params);
    return (
        <div>
            <h2>Post Details about {posts.id}</h2>
            <p>Title: {posts.title}</p>
            <button onClick={()=>{navigate(-1)}}>Go back</button>
        </div>
    );
};

export default PostDetails;