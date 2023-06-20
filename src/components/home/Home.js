import css from "./Home.css"
import Greeting from "../greeting/Greeting"
import { TbCurrencyDong } from "react-icons/tb"
import list from "../../imglist.json"
import { useState, useEffect } from "react"
import { Link, Routes, Route } from "react-router-dom"
import axios from "axios"
import { Col } from "react-bootstrap"
export default function Home() {
    const [data, setData] = useState([])
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
    const getData = async () => {
        const url = `https://64788a1a362560649a2dfbd8.mockapi.io/list`
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    console.log("meo")
    useEffect(() => {
        getData()
    }, [])
    const books = list.books
    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<Greeting/>}></Route>
            </Routes>
            <div className="sliderContent">
                <img src="logo2.png"></img>
                <span>Các thể loại được ưa thích</span>
            </div>
            <div className="slider">
                <div className="sliderImg">
                    <div className="leftSlider" >
                        <div className="economicbooks" onMouseOut={() => change(false, 1)} onMouseOver={() => change(true, 1)}>
                            <span className={`${check1 ? "active" : ""}`}>Sách kinh tế</span>
                            <img src="sachkinhte.jpg"></img>
                        </div>
                        <div className="majorbooks" onMouseOut={() => change(false, 2)} onMouseOver={() => change(true, 2)}>
                            <span className={`${check2 ? "active" : ""}`} >Sách chuyên môn</span>
                            <img src="sachchuyenmon.jpg" ></img>
                        </div>
                    </div>
                    <div className="rightSlider" >
                        <div className="literaturebooks" onMouseOut={() => change(false, 3)} onMouseOver={() => change(true, 3)}>
                            <span className={`${check3 ? "active" : ""}`} >Sách văn học</span>
                            <img src="sachvanhoc.jpg"></img>
                        </div>
                        <div className="childrenbooks" onMouseOut={() => change(false, 4)} onMouseOver={() => change(true, 4)}>
                            <span className={`${check4 ? "active" : ""}`}>Sách thiếu nhi</span>
                            <img src="sachthieunhi.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookshelf">
                <div className="bookshelfContent">
                    <div className="bookshelfContentTop">
                        <div className="bookshelfContain">
                            <img src="logo2.png"></img>
                            <h1>Tủ sách MyBooks</h1>
                        </div>
                    </div>
                    <div className="bookshelfContentElse">
                        <div className="slide">
                            {
                                data.map((value, key) => {
                                    return (
                                        <div key={key}>
                                            <div className="slideContent">
                                                <div className="slideContain">
                                                    <div className="img_slider">
                                                        <img src={books[key].img} ></img>
                                                    </div>
                                                    <span>{value.name}</span>
                                                    <span>{value.cost} <TbCurrencyDong /></span>
                                                    <button>Mua Ngay</button>
                                                </div>
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