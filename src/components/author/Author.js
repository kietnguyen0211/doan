import list from "../../author.json"
import css from "./Author.css"
import { useState } from "react"
export default function Author() {
    const authors = list.authors
    console.log(list)
    console.log(authors)
    const [id,setId]=useState(0)
    const [check,setCheck]=useState(false)
    const change = (flag,idInner) => {
        if(flag==true){
            setCheck(true)
            setId(idInner)
        }
        else{
            setCheck(false)
        }
    }
    return (
        <div className="Author">
            {
                authors.map((value, key) => {
                    return (
                        <div key={key} className="one_author">
                            <div className="innerAuthor" onClick={()=>change(true,key)}>
                                <img src={value.img}></img>
                                <h1>{value.name}</h1>
                            </div>
                        </div>
                    )
                })
            }
            <div className={`${check ? "infoAuthor active" : "infoAuthor"}`}>
                <span><h2>Giới thiệu:</h2> {authors[id].intro} <button onClick={()=>change(false,0)}>X</button></span>
                <span><h2>Tác phẩm:</h2> {authors[id].products}</span>
                <span><h2>Thông tin thêm:</h2> {authors[id].more}</span>
            </div>
            <div className={`${check ? "coveredWall active1" : "coveredWall"}`}></div>
        </div>
    )
}