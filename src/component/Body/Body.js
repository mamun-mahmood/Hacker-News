import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Body.css'
const Body = () => {
    const [keyWord, setKeyword] = useState('topstories')//for changing stories type with top buttons
    const [stories, setStories] = useState([])
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/${keyWord}.json?print=pretty`)
        .then(res => res.json())
        .then(data => setStories(data))
        .catch(err => {
            console.log(err);
        })
    }, [keyWord])
    const [to, setTo] = useState(5)
    const sliceStories = stories.slice(0, to)// take 5 item from the array for the first time
    return (
        <div>
            <div className="topBtnContainer">
                <button onClick={() => {
                    setKeyword('newstories') 
                    setTo(5)}} className="newBtn">New</button>
                <button onClick={() => {
                    setKeyword('topstories')
                    setTo(5)
                    }} className="pastBtn">Past</button>
                <button onClick={() => {
                    setKeyword('beststories')
                    setTo(5)
                    }} className="newBtn">Best</button>
            </div>
            {
                sliceStories.map(each => <ArticleCard key={each} id={each}></ArticleCard>)
            }
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                {/* load more 5 data each time clicking load more button */}
                <button className="loadMoreBtn" onClick={() => setTo(to+5)}>
                    Load More
                </button> 
            </div>
            <footer className="footer">
                <h2 style={{fontWeight: '800'}}>HACKERNEWS.</h2>
            </footer>
        </div>
    );
};

export default Body;