import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../../data'
import './Feed.css'

const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`

        await fetch(videoList_url).then(response => response.json()).then(data => {console.log("data",data.items);setData(data.items)})
    }

    useEffect(() => {
        fetchData();
    }, [category])


    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </Link>
                )
            })}

        </div>
    )
}

export default Feed

