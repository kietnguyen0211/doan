import React, { useRef } from 'react';
import css from "./Email.css"
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import AppContext from '../../AppContext';
export const Email = () => {
  const { buy } = useContext(AppContext)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_r2mnfqi", "template_d473qa7", form.current, "AKwfBWf_wH99JRsoL")
      .then((result) => {
        console.log(result.text);
        console.log("sent message");
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className='Email'>
      <h1>Chốt Đơn</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Tên của bạn"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email của bạn"/>
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" placeholder="Hãy tóm tắt đơn hàng theo phong cách riêng của bạn! Hoặc gửi phản hồi <3" />
        </div>
        <input className="buttonEmail" type="submit" value="Send" />
      </form>
      <p><h2>Ghi chú: </h2>Nếu có bất kỳ thắc mắc hay bất tiện nào trong lúc bạn trải nghiệm trang web của MyBooks, hãy gửi thông tin phản hồi cho chúng tôi. Chúng tôi sẽ cố gắng khắc phuch sớm nhất có thể. Bên cạnh đó, trang này cũng là nơi bạn gửi thông tin đơn hàng của mình. Chúng tôi thường phản hồi rất sớm trong giờ hành chính và sẽ cố gắng vận chuyển đơn hàng đến bạn sớm nhất có thể.</p>
    </div>
  );
};
export default Email