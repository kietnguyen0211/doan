import { AppContext } from "../../AppContext";
import { useContext, useEffect } from "react";
import css from "../pay/Pay.css"
export default function Pay(){
    const { buy } = useContext(AppContext)
    console.log(buy)
    return(
        <div className="pay">
            {
                buy.map((value,key)=>{
                    return(
                        <div className="innerPay" key={key}>
                            <span>{value.name}</span>
                            <span>{value.cost}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}