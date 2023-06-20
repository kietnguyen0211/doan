import { AiFillStar } from "react-icons/ai"
import css from "./Introduce.css"
export default function Introduce(){
    return(
        <div className="introduce">
            <h1 className="greeting">VỀ MYBOOKS</h1>
            <span className="star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
            <h1 className="greeting_1">14 NĂM XUẤT BẢN VÀ PHÁT HÀNH SÁCH </h1>
            <div className="content">
                <span>MyBooks là một trang web chuyên cung cấp sách kinh tế và sách chuyên môn với hơn 10.000 tựa sách</span>
                <span>Sự đa dạng về chủ đề của sách gồm các thể loại về về tài chính, đầu tư, kinh doanh, quản lý sản xuất, quản lý điều hành, kinh tế phát triển, kinh tế học và nhiều chuyên môn khác. </span>
            </div>
            <div className="include">
                <div className="includeContent">
                    <div className="vision">
                        <h1>Tầm nhìn</h1>
                        <span>Trở thành một trong những trang web cung cấp sách chất lượng hàng đầu trên thế giới với sự đa dạng về chủ đề và chuyên môn.</span>
                        <span>Luôn cố gắng để cung cấp:</span>
                        <ul>
                            <li>Trải nghiệm mua sắm sách tốt nhất</li>
                            <li>Giao diện trực quan</li>
                            <li>Dễ sử dụng</li>
                            <li>Các tài liệu chất lượng cao</li>
                        </ul>
                    </div>

                    <div className="mission">
                        <h1>Sứ mệnh</h1>
                        <ul>
                            <li>Giúp độc giả mở rộng và nâng cao kiến thức</li>
                            <li>Kích thích sự phát triển và tiến bộ trong cuộc sống và công việc</li>
                            <li>Trở thành đối tác tin cậy cho các cá nhân và các tổ chức khi họ tìm kiếm kiến thức chuyên môn và gia tăng giá trị bản thân</li>
                        </ul>
                    </div>
                </div>
                <div className="essential">
                    <h1>Giá trị cốt lõi</h1>
                    <ul>
                        <li>MyBooks ưu tiên sự đổi mới và chất lường đầu sách.</li>
                        <li>Cam kết đáp ứng nhu cầu đọc sách của khách hàng</li>
                        <li>Luôn cập nhật và mở rộng danh mục sách để đáp ứng nhu cầu của khách hàng</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}