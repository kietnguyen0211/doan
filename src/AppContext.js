import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import infobooks from "./infobook.json"
export const AppContext = createContext({})
export const AppProvider = ({children})=>{
    const [data,setData]=useState([])
    const [list,setList]=useState([])
    const [buy,setBuy]=useState([])
    const books = infobooks.infobooks
    const BuyNow = (id) => {
            const find = data.map((value)=>value.id == id ? setList({name:value.name,cost:value.cost}) :'')
                setBuy([...buy,list])
            console.log("meo",list)
            console.log(buy)
    }
    const getData = async () => {
        const url=`https://64788a1a362560649a2dfbd8.mockapi.io/list`

        axios
            .get(url)
            .then((res)=>{
                setData(res.data)
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <AppContext.Provider value={{ BuyNow, buy, data, books}}>
          {children}
        </AppContext.Provider>
      )
}
export default AppContext