import AppContext from "../../AppContext"
import { useContext } from "react"
import css from "./Products.css"
export default function Products() {
    const { BuyNow, books } = useContext(AppContext)
    console.log("books: ",books)
    return (
        <div className="Products">
            <h1 className="tittleProduct">Tủ Sách Của MyBooks</h1>
            <div className="products">
                {
                    books.map((value, key) => {
                        return (
                            <div key={key} className="product">
                                <div className="oneProduct">
                                    <div className="img_slider">
                                        <img src={value.img}></img>
                                    </div>
                                    <div className="contentProduct">
                                        <h1>{value.name}</h1>
                                        <span>Tác giả: {value.author}</span>
                                        <span>Giá: {value.cost} đ</span>
                                        <button onClick={()=>BuyNow(value.id)}>Mua Ngay</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

