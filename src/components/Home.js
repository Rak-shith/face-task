import React, { useEffect, useState }  from 'react';
//import Link from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "./Comment";
import Loader from "./Loader";
import EndMsg from "./EndMsg";

function Home() {
    const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://randomuser.me/api/?page=1&results=20`
        // https://randomuser.me/api/?results=_page=1&_limit=20
        // https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20
      );
      const data = await res.json();
      console.log("data",data)
      console.log("data",data['results'])
      setItems(data['results']);
    };
    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=20`
      // `https://randomuser.me/api/?results=${page}`
      // https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20
    );
    const data = await res.json();
    console.log("data",data)
    return data['results'];
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };  
    return (
      <div>
        <h1 className='text-center'>InfiniteScroll List</h1>
        {/* <Link className="btn btn-primary btn-block" to="/"> Logout </Link>  */}
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<EndMsg />}
    >
      <div className="container">
        <div className="row m-2">
          {items.map((item) => {
            return <Comment  email={item.email} first_name={item.name.first} last_name={item.name.last} phone={item.phone} picture={item.picture.large} state={item.location.state} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
    </div>
    )
}

export default Home;
