import { useContext } from "react"
import AppContext from "../../AppContext"
export default function Filter(){
    const { filter } = useContext(AppContext)
    console.log("filter: ",filter)
    return(
        <div>
            {
                
                filter.map((value,key)=>{
                    return(
                        <div key={key}>
                            <h1>{value.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}