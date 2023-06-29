import AppContext from "../../AppContext"
import { useContext } from "react"
import css from "./TopSaler.css"
export default function TopSaler() {
    const { books } = useContext(AppContext)
    return (
        <div className="Topsaler">
            <h1 className="titleTopsaler">Sách Bán Chạy</h1>
            <div className="TopSaler">
                {
                    books.map((value, key) => {
                        return (
                            <div className="topsaler" key={key}>
                                <div className="innerTopsaler">
                                    <div className="imgTopsaler">
                                        <img src={value.img}></img>
                                    </div>
                                    <div className="contentTopsaler">
                                        <span>{value.name}</span>
                                        <span>{value.cost} đ</span>
                                        <button><span>Mua Ngay</span></button>
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