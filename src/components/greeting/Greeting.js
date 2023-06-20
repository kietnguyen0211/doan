import css from "../greeting/Greeting.css"
import picture from "../header/img/bookshelf.jpg"
export default function Greeting() {
    return (
        <div className="Greeting">
            <div className="greeting">
                <h1>Chào mừng bạn đến với <span>MyBooks</span></h1>
                <h2>Tôi có một thông điệp dành tặng bạn!</h2>
            </div>
            <div className="message">
                <div className="messageContent">
                    <div className="leftMessageContent">
                        <img src={picture}></img>
                    </div>
                    <div className="rightMessageContent">
                        <span>Gửi đến đọc giả thân mến,</span>
                        <span>Bên trái là một bức ảnh với những quyển sách được xếp ngăn nắp. Chứng tỏ chủ nhân của kệ sách này là một người sống kỷ luật và rất trân trọng những quyển sách của mình.</span>
                        <span>Trên thế gian này, có rất nhiều những kiến thức chuyên môn và ý nghĩa cuộc sống mà đến gần cuối cuộc đời người ta mới tìm thấy và thấu hiểu. Nhưng họ không ích kỷ mà chọn cách lưu lại và chia sẽ cho thế hệ sau có thể đi nhanh và dễ dàng hơn.</span>
                        <span>Vì vậy, mọi người hãy xem việc đọc sách là một thói quen hàng ngày và lan tỏa đến mọi người xung quanh. Bởi sách chính là <span className="tenpoint">kho tàng kiến thức vô tận</span>!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}