import { Link, Routes, Route } from "react-router-dom"
import Introduce from "../introduce/Introduce"
import Products from "../products/Products"
import Author from "../author/Author"
import Home from "../home/Home"
import Email from "../email/Email"
export default function Body(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/introduce" element={<Introduce/>}></Route>
                <Route path="/author" element={<Author/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/email" element={<Email/>}></Route>
            </Routes>
        </div>
    )
}