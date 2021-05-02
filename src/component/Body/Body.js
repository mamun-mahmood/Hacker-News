import React, { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Body.css'
const Body = () => {
    const [keyWord, setKeyword] = useState('topstories')
    const [stories, setStories] = useState([])
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/${keyWord}.json?print=pretty`)
        .then(res => res.json())
        .then(data => setStories(data))
    }, [keyWord])
    const [to, setTo] = useState(5)
    const sliceStories = stories.slice(0, to)
    return (
        <div>
            <div className="topBtnContainer">
                <button onClick={() => setKeyword('newstories')} className="newBtn">New</button>
                <button onClick={() => setKeyword('topstories')} className="pastBtn">Past</button>
            </div>
            {
                sliceStories.map(each => <ArticleCard key={each} id={each}></ArticleCard>)
            }
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <button className="loadMoreBtn" onClick={() => setTo(to+5)}>
                    Load More
                </button>
            </div>
            <footer className="footer">
                <h2>HACKERNEWS.</h2>
            </footer>
        </div>
    );
};

export default Body;