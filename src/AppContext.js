import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import infobooks from "./infobook.json"
import listtype from "./type.json"
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const books = infobooks.infobooks
    const types = listtype.types
    const [data, setData] = useState([])
    const [loveList, setLoveList] = useState([])
    const [listSearch, setListSearch] = useState([])
    const [filter, setFilter] = useState([])
    const [text, setText] = useState("")
    const [checksb, setChecksb] = useState(false)
    let number = 0
    const [buy, setBuy] = useState(() => {
        let newList;
        if (localStorage.getItem("list")) {
            newList = JSON.parse(localStorage.getItem("list"));
        }
        else {
            newList = ""
        }
        return newList;
    })

    const handleSearch = (event) => {
        const value = event.target.value
        setText(value)
        console.log(text)
        const filterSearch = books.filter(book =>
            book.name.toLowerCase().includes(text.toLowerCase())
        );
        setListSearch(filterSearch)
    }


    const fil = (text) => {
        let newList = []
        if (text === "Kinh tế") {
            newList = [books[0], books[1], books[2]]
            setFilter(newList)
        } else if (text === "Kinh dị") {
            newList = [books[8]]
            setFilter(newList)
        }
    }

    const changeSb = (flag) => {
        number++
        console.log(number)
        if (number == 2) {
            setChecksb(false)
            number = 0
            console.log(number)
        }else if(number == 1){
            setChecksb(true)
            
        }else{
            setChecksb(false)
        }
    }

    const BuyNow = (id) => {
        let newList
        if (buy != "") {
            const kq = books.find((value) => value.id == id)
            const index = buy.findIndex((item) => item.id == id)
            if (index >= 0) {
                let newList = buy
                console.log("newListofBuy: ",newList," and Buy: ",buy)
                newList[index]["qty"]++
                setBuy(newList)
                console.log("newlistIf: ",newList)
                localStorage.setItem("list", JSON.stringify(newList))
            } else {
                newList = [...buy, { name: data[id].name, cost: data[id].cost, qty: 1, id: id }]
                console.log("newListElse",newList)
                setBuy(newList)
                localStorage.setItem("list", JSON.stringify(newList))
            }
        } else {
            newList = [...buy, { name: data[id * 1].name, cost: data[id * 1].cost, qty: 1, id: id }]
            localStorage.setItem("list", JSON.stringify(newList))
            console.log("newListFirst: ",newList)
            setBuy(newList)
        }
    }
    const Erase = (id) => {
        const kq = buy.filter((item) => item.id != id)
        setBuy(kq)
        localStorage.setItem("list", JSON.stringify(kq))
    }

    const changeQty = (id, num) => {
        console.log("idNum: ", id)
        const kq = buy.map((item) =>
            (item.id == id && !(num == -1 && item["qty"] == 1))
                ? { ...item, qty: item["qty"] + num }
                : item
        )
        setBuy(kq)
        localStorage.setItem("list", JSON.stringify(kq))
    }

    const love = (id) => {
        let newList
        newList = books.map((value) => value.id == id ?
            setLoveList([...loveList, { ...value, isComplete: !value.isComplete }])
            : value)
    }



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
    useEffect(() => {
        getData()
    }, [])

    return (
        <AppContext.Provider value={{ types, BuyNow, buy, data, books, love, loveList, fil, filter, handleSearch, text, listSearch,changeQty, Erase, checksb, changeSb }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext