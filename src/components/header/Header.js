import { Link } from "react-router-dom"
import { MdOutlineSell } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai"
import { VscAccount } from "react-icons/vsc"
import { FiFilter } from "react-icons/fi"
import { RiSearchLine } from "react-icons/ri"
import { GrShop } from "react-icons/gr"
import { MdKeyboardArrowDown } from "react-icons/md"
import Introduce from "../introduce/Introduce"
import png from "../header/img/logo2.png"
import axios from "axios"
import css from "../header/Header.css"
import someTypes from "../../type.json"
import authorjson from "../../author.json"
import Pay from "../pay/Pay"
import { useState, useContext } from "react";
import { AppContext } from "../../AppContext"
export default function Header() {
    const { types, fil, handleSearch, text, listSearch, nothing, changeSb} = useContext(AppContext)
    const [check, setCheck] = useState(false)
    const [check1, setCheck1] = useState(false)
    const [num, setNum] = useState(0)
    const [checkFil, setCheckFil] = useState(false)
    const changeFil = (flag) => {
        if (flag == true) {
            setCheckFil(true)
        } else {
            setCheckFil(false)
        }
    }
    const change = (flag) => {
        if (flag == true) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }
    const change1 = (flag) => {
        if (flag == true) {
            setCheck1(true)
        } else {
            setCheck1(false)
        }
    }
    const authors = authorjson.authors
    return (
        <div className="header">
            <span className="toggle" onClick={()=>changeSb(true)}>|||</span>
            <div className="topHeader">
                <div className="leftTopHeader">
                    <div className="bestSeller">
                        <span className="iconTopHeader"><MdOutlineSell /></span>
                        <Link className="linkTopHeader" to="/topsaler"><span>Bán chạy</span></Link>
                    </div>
                    <div className="blog">
                        <span className="iconTopHeader"><BsReverseLayoutTextSidebarReverse /></span>
                        <Link className="linkTopHeader" to="/blog"><span>Bài viết</span></Link>
                    </div>
                    <div className="loveProduct">
                        <span className="iconTopHeader"><AiOutlineHeart /></span>
                        <Link className="linkTopHeader" to="/love"><span>Danh mục yêu thích</span></Link>
                    </div>
                </div>
                <div className="rightTopHeader">
                    <div className="email">
                        <span className="iconTopHeader"><HiOutlineMail /></span>
                        <Link className="linkTopHeader" to="/email"><span>Email</span></Link>
                    </div>
                </div>
            </div>
            <div className="middleHeader">
                <div className="leftMiddleHeader">
                    <div className="logo">
                        <img src={png}></img>
                        <h1>MyBooks</h1>
                    </div>
                </div>
                <div className="centerMiddleHeader">
                    <div className="search">
                        <div className="filter">
                            <h1>Tìm Kiếm</h1>
                        </div>
                        <input type="text" placeholder="Nhập tên sách..." onChange={handleSearch} value={text} onClick={() => changeFil(true)}></input>
                        <Link className="iconSearch" to="/filter"><RiSearchLine /></Link>
                    </div>
                    <ul className={checkFil ? "listSearch active" : "listSearch"}>
                        <li className="liFirst" onClick={()=>changeFil(false)}>X</li>
                        {
                            listSearch.map((value, key) => {
                                return (
                                    <li key={key}>{value.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="elseMiddleHeader">
                    <Link className="cart" to="/pay">
                        <span className="iconCart"><GrShop /> <sup className="numberCart">0</sup></span>
                    </Link>
                </div>
            </div>
            <div className="navbar">
                <div className="navbarContent">
                    <Link className="linkNavbar" to="/"><h1>Trang chủ</h1></Link>
                    <Link className="linkNavbar" to="/introduce"><h1>Giới thiệu</h1></Link>
                    <Link className="linkNavbar" to="/products"><h1>Sản phẩm</h1></Link>
                    <div className="type">
                        <Link className="linkNavbar"><h1>Thể loại</h1></Link>
                        <span className={`${check ? "active1" : "active2"}`} onClick={() => {
                            if (check == true) {
                                change(false)
                                setCheck(false)
                            } else {
                                change(true)
                                console.log("meo")
                            }
                        }}><MdKeyboardArrowDown /></span>
                        <ul className={`${check ? "types active" : "types"}`}>
                            {
                                types.map((value, key) => {
                                    return (
                                        <li key={key}><Link>{value.type}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="author">
                        <Link to="/author" className="linkNavbar"><h1>Tác giả</h1></Link>
                        <span className={`${check1 ? "active1" : "active2"}`} onClick={() => {
                            if (check1 == true) {
                                change1(false)
                                setCheck1(false)
                            } else {
                                change1(true)
                            }
                        }}><MdKeyboardArrowDown /></span>
                        <ul className={`${check1 ? "active" : ""}`}>
                            {
                                authors.map((value, key) => {
                                    return (
                                        <li key={key}><span>{value.name}</span></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link className="linkNavbar" to="/contact"><h1>Liên hệ</h1></Link>
                </div>
            </div>
        </div>
    )
}