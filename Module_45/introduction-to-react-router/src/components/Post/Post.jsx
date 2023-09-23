import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h2>Post id: {id}</h2>
            <h3>{title}</h3>
            <p style={{ display: "flex", flexGrow: "1" }}>{body}</p>
            <Link to={`/post/${id}`}>
                <button>
                    Post Detail
                </button>
            </Link>
            <br />
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};


Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;