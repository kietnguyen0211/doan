import axios from "axios"
import { useState, useEffect } from "react"
import css from "./Products.css"
import list from "../../imglist.json"
export default function Products(){
    const [data, setData] = useState([])
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
    const books=list.books
    
    useEffect(() => {
        getData()
    }, [])
    return(
        <div className="products">
            {
                data.map((value,key)=>{
                    return(
                        <div key={key} className="product">
                            <div className="oneProduct">
                                <div className="img_slider">
                                    <img src={books[key].img}></img>
                                </div>
                                <h1>{value.name}</h1>
                                <span>Tác giả: {value.author}</span>
                                <span>Giá: {value.cost} đ</span>
                                <button>Mua Ngay</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

