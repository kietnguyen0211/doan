import AppContext from "../../AppContext"
import { useContext } from "react"
export default function TopSaler(){
    const { books } = useContext(AppContext)
    return(
        <div>
            {
                books.map((value,key)=>{
                    return(
                        <div className="topsaler">
                            <div className="imgTopsaler">
                                <img src={value.img}></img>
                            </div>
                            <div className="contentTopsaler">
                                <span>{value.name}</span>
                                <span>{value.cost}</span>
                                <button>Mua Ngay</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}