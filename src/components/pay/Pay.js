import { AppContext } from "../../AppContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import css from "../pay/Pay.css"
import { TiDeleteOutline } from "react-icons/ti"
export default function Pay(){
    const { buy, changeQty, Erase } = useContext(AppContext)
    return(
        <div className="pay">
            <h1 className="Pay_title">Giỏ Hàng Của Bạn</h1>
            <h2>Hãy chọn quyển sách phụ hợp với bạn và đi đến <Link to="/email" className="paid">thanh toán</Link></h2>
            {
               buy == "" ? 
                    (
                        <div className="Pay_1">
                            <h1>Bạn Chưa Có Đơn Hàng Nào!</h1>
                            <h2>Hãy quay lại trang chủ để chọn quyển sách phù hợp với bạn.</h2>
                        </div>
                    ):
               buy.map((value,key)=>{
                    return(
                        <div className="innerPay" key={key}>
                            <span className="innerPay_1">{value.name}</span>
                            <span className="innerPay_2">{value.cost}</span>
                            <span className="decrease" onClick={()=>changeQty(value.id,-1)}>-</span><span className="numberQty">{value.qty}</span><span className="increase" onClick={()=>changeQty(value.id,1)}>+</span>
                            <span className="innerPay_3" ><TiDeleteOutline onClick={()=>Erase(value.id)} /></span>
                        </div>
                    )
                })
            }
        </div>
    )
}