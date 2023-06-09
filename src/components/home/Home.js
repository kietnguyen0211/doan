import css from "./Home.css"
import Greeting from "../greeting/Greeting"
import { TbCurrencyDong } from "react-icons/tb"
import list from "../../imglist.json"
import { useState, useEffect, useContext } from "react"
import { Link, Routes, Route } from "react-router-dom"
import { AppContext } from "../../AppContext"
import axios from "axios"
import { Col } from "react-bootstrap"
import { AiOutlineHeart } from "react-icons/ai"
import imgLogo from "./logo2.png"
export default function Home() {
    const { BuyNow, books, love } = useContext(AppContext)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)

    const change = (flag, id) => {
        if (flag == true && id == 1) {
            setCheck1(true)
        }
        else if (flag == true && id == 2) {
            setCheck2(true)
        }
        else if (flag == true && id == 3) {
            setCheck3(true)
        }
        else if (flag == true && id == 4) {
            setCheck4(true)
        }
        else {
            setCheck1(false)
            setCheck2(false)
            setCheck3(false)
            setCheck4(false)
        }
    }
    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<Greeting />}></Route>
            </Routes>
            <div className="sliderContent">
                <img src={imgLogo}></img>
                <span>Các thể loại được ưa thích</span>
            </div>
            <div className="slider">
                <div className="sliderImg">
                    <div className="leftSlider" >
                        <div className="economicbooks" onMouseOut={() => change(false, 1)} onMouseOver={() => change(true, 1)}>
                            <span className={`${check1 ? "active" : ""}`}>Sách kinh tế</span>
                            <img src="https://readvii.com/wp-content/uploads/2020/03/sach-hay-ve-kinh-te-cover.png"></img>
                        </div>
                        <div className="majorbooks" onMouseOut={() => change(false, 2)} onMouseOver={() => change(true, 2)}>
                            <span className={`${check2 ? "active" : ""}`} >Sách chuyên môn</span>
                            <img src="https://toidayhoc.com/wp-content/uploads/2019/12/s%C3%A1ch-l%E1%BA%ADp-tr%C3%ACnh-php.jpg" ></img>
                        </div>
                    </div>
                    <div className="rightSlider" >
                        <div className="literaturebooks" onMouseOut={() => change(false, 3)} onMouseOver={() => change(true, 3)}>
                            <span className={`${check3 ? "active" : ""}`} >Sách văn học</span>
                            <img src="https://sachhay24h.com/uploads/news/243969194_l.jpg"></img>
                        </div>
                        <div className="childrenbooks" onMouseOut={() => change(false, 4)} onMouseOver={() => change(true, 4)}>
                            <span className={`${check4 ? "active" : ""}`}>Sách thiếu nhi</span>
                            <img src="https://10hay.com/wp-content/uploads/2016/07/sach-thieu-nhi.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookshelf">
                <div className="bookshelfContent">
                    <div className="bookshelfContentTop">
                        <div className="bookshelfContain">
                            <img src={imgLogo}></img>
                            <h1>Tủ sách MyBooks</h1>
                        </div>
                    </div>
                    <div className="bookshelfContentElse">
                        <div className="slide">
                            {
                                    books.map((value, key) => {
                                        return (
                                                <div className="slideContent" key={key}>
                                                    <div className="slideContain">
                                                        <div className="img_slider">
                                                            <img src={value.img} ></img>
                                                        </div>
                                                        <span>{value.name}</span>
                                                        <span>{value.cost} <TbCurrencyDong /></span>
                                                        <span onClick={()=>love(value.id)} className="heart"><AiOutlineHeart/></span>
                                                        <button onClick={()=>BuyNow(value.id)}>Mua Ngay</button>
                                                    </div>
                                                </div>
                                        )
                                    })
                            
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}