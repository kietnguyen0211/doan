import css from "./Blog.css"
export default function Blog() {
    return (
        <div className="Blog">
            <h1 className="tittleBlog">Các Bài Viết Của MyBooks</h1>
            <div className="innerBlog">
                <div className="anotherway">
                    <h1>Để bạn biết thêm về MyBooks</h1>
                    <p>MyBooks là một hiệu sách chuyên nghiệp và uy tín, cung cấp cho người đọc một thế giới sách đầy đủ và đa dạng. Với phương châm "Sách là người bạn đồng hành truyền cảm hứng", MyBooks tự hào mang đến cho bạn những cuốn sách hay, giá trị và đầy ý nghĩa.</p>
                    <p>Tại MyBooks, chúng tôi có một kho sách đa dạng, bao gồm các thể loại từ truyện tranh, tiểu thuyết đến sách kinh tế, kỹ năng sống và báo chí. Không chỉ là một địa chỉ tư vấn sách, nhân viên của MyBooks sẽ giúp bạn tìm được cuốn sách mà bạn cần để đáp ứng tối đa nhu cầu đọc sách của bạn.</p>
                    <p>Với mục tiêu "Sách là người bạn đồng hành", MyBooks luôn tâm niệm rằng sách không chỉ là nguồn tri thức quý giá mà còn là một người bạn đồng hành đáng tin cậy trong cuộc sống. Do đó, tại MyBooks, bạn sẽ tìm thấy những cuốn sách chất lượng, giúp bạn phát triển tư duy, cải thiện sự hiểu biết và tự nâng cao chất lượng cuộc sống của mình.</p>
                    <p>Hãy đến với MyBooks để tìm kiếm cho mình những cuốn sách cần thiết và trải nghiệm một không gian sách thoải mái, thoáng mát và thư giãn. Chúng tôi tin rằng, MyBooks sẽ là địa chỉ đáng tin cậy cho người đọc khi tìm kiếm những tác phẩm giá trị.</p>
                </div>
                <div className="anotherBlog">
                    <h1>Có thể bạn đã biết: </h1>
                    <p>William Shakespeare là một nhà văn vĩ đại của Anh, sinh năm 1564 và qua đời vào năm 1616. Ông là một trong những tác giả được coi là kinh điển nhất trong văn học thế giới và để lại cho chúng ta rất nhiều tác phẩm vô cùng đáng giá.</p>
                    <p>Dưới đây là một số tác phẩm vĩ đại của Shakespeare và các lời đánh giá của các nhà văn, nhà phê bình nổi tiếng khác về tác phẩm của ông:</p>
                    <div className="poShake">
                        <div>
                            <span>Romeo and Juliet</span>
                            <p>Tác phẩm được nhà văn nổi tiếng Ernest Hemingway đánh giá rất cao và cho rằng đây là tác phẩm đầu tiên của Shakespeare mà ông đã trổ tài viết lời hai nhân vật trẻ tuổi đầy tình yêu. Tác phẩm này đã trở thành biểu tượng cho tình yêu lãng mạn và được đánh giá là một trong những tác phẩm kinh điển nhất của văn học thế giới.</p>
                        </div>
                        <div>
                            <span>Hamlet</span>
                            <p>Tác phẩm này là một trong những tác phẩm nổi tiếng nhất của Shakespeare. Nhà văn nổi tiếng Samuel Taylor Coleridge đã đánh giá cao tác phẩm này và cho rằng, "Hamlet không phải là một con người, mà nó thực sự là cả một thế giới." Tác phẩm này xoay quanh câu chuyện của Hoàng tử Hamlet, người đang tìm kiếm sự báo thù cho cái chết của cha mình.</p>
                        </div>
                        <div>
                            <span>Macbeth</span>
                            <p>Tác phẩm này kể về những tham vọng của một vị tướng trong quân đội Scotland. Các nhà kịch nổi tiếng như Samuel Johnson và William Hazlitt đánh giá rất cao tác phẩm này và cho rằng, "Đó là tác phẩm của một nhà văn có tài năng và sự sâu sắc về con người."</p>
                        </div>
                        <div>
                            <span>Othello</span>
                            <p>Tác phẩm này được coi là một trong những tác phẩm kinh điển của Shakespeare. Nó xoay quanh câu chuyện của một tướng quân người Mouro tên là Othello và sự ghen tuông của vợ ông. Các nhà văn nổi tiếng như T.S. Eliot đã đánh giá rất cao tác phẩm này và cho rằng, "Đó là một tác phẩm thực sự vĩ đại."</p>
                        </div>
                    </div>
                </div>
                <span className="comment">Lời phê bình về tác phẩm của Shakespeare</span>
                <p>Tuy Albert Einstein không phải là một nhà phê bình văn học chuyên nghiệp, nhưng ông đã biểu đạt sự ngưỡng mộ của mình dành cho William Shakespeare, khi nói rằng: "Ở Shakespeare, tôi tìm thấy câu trả lời cho những câu hỏi mà cuộc sống đặt ra cho tôi." Điều này cho thấy sự ảnh hưởng và tầm quan trọng to lớn của tác phẩm của Shakespeare, không chỉ đối với các nhà văn, nhà phê bình văn học chuyên nghiệp mà còn đối với mọi người trong cuộc sống thường ngày.</p>
            </div>
        </div>
    )
}