import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime+time);
    // remove the read blog from bookmark
    // console.log(id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
  }

  const handleAddToBookmark = blog => {
    setBookMarks([...bookmarks, blog]);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
