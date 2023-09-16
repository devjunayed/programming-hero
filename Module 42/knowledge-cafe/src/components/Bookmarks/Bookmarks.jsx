import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300  mt-4 p-4 drop-shadow-xl">
            <div className='text-center p-4 border border-violet-600'>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks