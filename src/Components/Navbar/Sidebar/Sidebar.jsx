import React from 'react'
import automobiles from '../../../assets/automobiles.png'
import blogs from '../../../assets/blogs.png'
import cameron from '../../../assets/cameron.png'
import entertainment from '../../../assets/entertainment.png'
import game_icon from '../../../assets/game_icon.png'
import home from '../../../assets/home.png'
import jack from '../../../assets/jack.png'
import megan from '../../../assets/megan.png'
import music from '../../../assets/music.png'
import news from '../../../assets/news.png'
import simon from '../../../assets/simon.png'
import sports from '../../../assets/sports.png'
import tech from '../../../assets/tech.png'
import tom from '../../../assets/tom.png'
import './Sidebar.css'


const Sidebar = ({sidebar,category,setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div >
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`}onClick={()=>setCategory(28)}>
                    <img src={tech} alt="" /><p>technology</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt="" /><p>News</p>
                </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="" /> <p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" /> <p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /> <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /> <p>5-Minute Craft</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /> <p>Nas Daily</p>
                </div>

            </div>
        </div>
    )
}

export default Sidebar