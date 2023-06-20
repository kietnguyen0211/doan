import { Link } from "react-router-dom"
import css from "./Footer.css"
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa"
import { GrLink } from "react-icons/gr"
import { TbBrandShopee } from "react-icons/tb"
import { AiOutlineAlibaba } from "react-icons/ai"
export default function Footer() {
    return (
        <div className="footer">
            <div className="topFooter">
                <div className="logoFooter">
                    <img src="logo2.png"></img>
                    <h1>MyBooks</h1>
                </div>
                <div className="contentFooter">
                    <h1>Thông tin liên hệ</h1>
                    <div className="containFooter">
                        <div className="address">
                            <span className="child_1">Địa chỉ:</span>
                            <span>Số 6 Lê Lợi, Phường 4, Gò Vấp, Thành Phố Hồ Chí Minh.</span>
                        </div>
                        <div className="mst">
                            <span className="child_1">MST:</span>
                            <span>0315296079</span>
                        </div>
                        <div className="Hotline">
                            <span className="child_1">Hotline:</span>
                            <span>0877.71.33.48</span>
                        </div>
                        <div className="emailFooter">
                            <span className="child_1">Email:</span>
                            <span>kietnguyen02112002@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="iconsFooter">
                    <h1>Dõi theo chúng tôi trên</h1>
                    <div className="icons">
                        <Link><FaFacebookF /></Link>
                        <Link><FaTiktok /></Link>
                        <Link><FaYoutube /></Link>
                        <Link><TbBrandShopee /></Link>
                        <Link><AiOutlineAlibaba /></Link>
                    </div>
                </div>
            </div>
            <div className="elseFooter">
                <h1>Copyright © 2023 MyBooks. Tất Cả Các Quyền.</h1>
            </div>
        </div>
    )
}