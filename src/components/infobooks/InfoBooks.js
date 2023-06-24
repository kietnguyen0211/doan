import list from "../../infobook.json"
import css from "./InfoBooks.css"
export default function InfoBooks(){
    const data = list.infobooks
    return(
        <div>
            {
                data.map((value,key)=>{
                    return(
                        <div className="infobooks" >
                            <div className="infoImg">
                                <img src={value.img}></img>
                            </div>
                            <div className="infoContent">
                                <span>Tên sách: {value.name}</span>
                                <span>Tác giả: {value.author}</span>
                                <span>Kho: {value.warehouse}</span>
                                <span>Tóm tắt nội dung: {value.tocontent}</span>
                              </div>
                        </div>

                    )
                })
            }
        </div>
    )
}