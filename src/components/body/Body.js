import { Link, Routes, Route } from "react-router-dom"
import Introduce from "../introduce/Introduce"
import Products from "../products/Products"
import Author from "../author/Author"
import Home from "../home/Home"
import Email from "../email/Email"
import Pay from "../pay/Pay"
import TopSaler from "../topseller/TopSaler"
import InfoBooks from "../infobooks/InfoBooks"
import Blog from "../blog/Blog"
import Love from "../love/Love"
import Filter from "../filter/Filter"
import Contact from "../contact/Contact"
import AppContext from "../../AppContext"
import { useContext, useState } from "react"
import { RiSearchLine } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import authorjson from "../../author.json"
import css from "./Body.css"
export default function Body() {
    const { types, nothing, listSearch, text, handleSearch, checksb } = useContext(AppContext)
    const [checkType, setCheckType] = useState(false)
    const [checkAuthor, setCheckAuthor] = useState(false)
    const [num, setNum] = useState(0)
    const [checkFil, setCheckFil] = useState(false)
    const changeFil = (flag) => {
        if (flag == true) {
            setCheckFil(true)
        } else {
            setCheckFil(false)
        }
    }
    const changeType = (flag) => {
        if (flag == true) {
            setCheckType(true)
        } else {
            setCheckType(false)
        }
    }
    const changeAuthor = (flag) => {
        if (flag == true) {
            setCheckAuthor(true)
        } else {
            setCheckAuthor(false)
        }
    }
    const authors = authorjson.authors
    return (
        <div className="body">
            <div className={checksb ? "sidebar active" : "sidebar"}>
                <div className="sidebarSearch">
                    <div className="searchSidebar">
                        <div className="filterSidebar">
                            <h1>Tìm Kiếm</h1>
                        </div>
                        <input type="text" placeholder="Nhập tên sách..." onChange={handleSearch} value={text} onClick={() => changeFil(true)}></input>
                        <Link className="iconSearch" to="/filter"><RiSearchLine /></Link>
                        <span className={checkFil ? "closeSearch activeSearch" : "closeSearch"} onClick={()=>changeFil(false)}>X</span>
                    </div>
                    <ul className={checkFil ? "listSearchSidebar active" : "listSearch"}>
                        {
                            listSearch.map((value, key) => {
                                return (
                                    <li key={key}>{value.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link className="linkNavbarSidebar" to="/"><h1>Trang chủ</h1></Link>
                <Link className="linkNavbarSidebar" to="/introduce"><h1>Giới thiệu</h1></Link>
                <Link className="linkNavbarSidebar" to="/products"><h1>Sản phẩm</h1></Link>
                <div className="typeSidebar">
                    <Link className="linkNavbarSidebar"><h1>Thể loại</h1></Link>
                    <span className={`${checkType ? "active1" : "active2"}`} onClick={() => {
                        if (checkType == true) {
                            changeType(false)
                            setCheckType(false)
                        } else {
                            changeType(true)
                            console.log("meo")
                        }
                    }}><MdKeyboardArrowDown /></span>
                    <ul className={`${checkType ? "typeSidebar active" : "types"}`}>
                        {
                            types.map((value, key) => {
                                return (
                                    <li key={key}><Link>{value.type}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="authorSidebar">
                    <Link to="/author" className="linkNavbarSidebar"><h1>Tác giả</h1></Link>
                    <span className={`${checkAuthor ? "active1" : "active2"}`} onClick={() =>{
                        if (checkAuthor == true) {
                            changeAuthor(false)
                            setCheckAuthor(false)
                        } else {
                            changeAuthor(true)
                        }
                    }}><MdKeyboardArrowDown /></span>
                    <ul className={`${checkAuthor ? "active" : ""}`}>
                        {
                            authors.map((value, key) => {
                                return (
                                    <li key={key}><Link>{value.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link className="linkNavbarSidebar" to="/contact"><h1>Liên hệ</h1></Link>
            </div>





            <Routes>
                <Route path="/infobooks" element={<InfoBooks />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/author" element={<Author />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/email" element={<Email />}></Route>
                <Route path="/pay" element={<Pay />}></Route>
                <Route path="/topsaler" element={<TopSaler />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/love" element={<Love />}></Route>
                <Route path="/filter" element={<Filter />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}