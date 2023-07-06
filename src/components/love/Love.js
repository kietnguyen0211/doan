import { AppContext } from "../../AppContext"
import { useContext } from "react"
import css from "./Love.css"
export default function Love() {
    const { loveList, BuyNow } = useContext(AppContext)
    console.log(loveList)
    return (
        <div className="lovePages">
            <h1 className="tittleLove">Sách Yêu Thích Của Bạn</h1>
            <div className="lovePage">
                {
                        loveList.map((value, key) => {
                            return (
                                <div key={key} className="oneLove">
                                    <div className="innerLove">
                                        <div className="loveImg">
                                            <img src={value.img}></img>
                                            <button onClick={() => BuyNow(value.id)}><span>Mua Ngay</span></button>
                                        </div>
                                        <div className="loveContent">
                                            <h1>{value.name}</h1>
                                            <span>Giá: {value.cost}đ</span>
                                            <span>Kho: {value.warehouse}</span>
                                            <p>Tổng quan: {value.tocontent}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                }
            </div>
        </div>
    )
}