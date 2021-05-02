import React, { useEffect, useState } from 'react';
import './ArticleCard.css'
import { format } from 'timeago.js';
import icon from '../../icon/clock-solid.svg'
const ArticleCard = ({ id }) => {
    const [article, setArticle] = useState({})
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [id])
    console.log(article);
    const { title, time, url, descendants} = article
    const milliseconds = time * 1000
    const newTime = format(milliseconds);
    return (
        <div className="main">
            <div className="card">
                <a href={url} target="blank" style={{ textDecoration: 'none' }}>
                    <div className="cardBody">
                        <h4>{title}</h4>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere molestias odit minus dolore laboriosam voluptate cupiditate rem hic quod architecto?</small></p>
                        <div style={{ display: 'flex' }}>
                            <img style={{ width: '1.5%', paddingRight: '5px' }} src={icon} alt="" />
                            <p><small style={{ borderRight: '1px solid black', paddingRight: '5px' }}>{newTime}</small></p>
                            <p><small style={{ paddingLeft: '5px' }}>{descendants} comments</small></p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ArticleCard;