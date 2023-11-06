// import { useEffect, useState } from "react";
// import "../css/loginform.css";
// import axios, { AxiosResponse } from "axios";
// import Swal from "sweetalert2";

// function LoginForm() {
//   const [show, setShow] = useState<boolean>(false);

//   // setTimeout qismi
//   useEffect(() => {
//     const loginTimer = setTimeout(() => {
//       setShow(true);
//     }, 5000);
//     return () => {
//       clearTimeout(loginTimer);
//     };
//   });

//   //  HTMLElement interface

//   //   interface IElement {
//   //     email: string;
//   //     message: string;
//   //     namee: string;
//   //     number: number;
//   //   }

//   //  Telegram API qismi

//   const form = document.getElementById("form") as HTMLFormElement;
//   const TOKEN = "5513826962:AAH46xbqBpQnCrZVjxSMGVNZ2B-josDlHUs";
//   const CHAT_ID = "5490568043";
//   const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     if (
//       this.email.value === "" ||
//       this.message.value === "" ||
//       this.namee.value === "" ||
//       this.number.value === ""
//     ) {
//       Swal.fire(
//         "Xatolik yuz berdi!",
//         "Ma'lumotlarni to'g'ri kiriting!",
//         "error"
//       );

//       return;
//     }

//     const getMessage = () => {
//       let message = "<b>Saytdan habar keldi!</b>\n\n";
//       message += `<b>Jo'natuvchi: </b> $\n`;
//       message += `<b>Email: </b> $\n`;
//       message += `<b>Telefon raqam: </b> $\n`;
//       message += `<b>Habar: </b> $\n`;
//       let element = document.createElement("div");
//       element.innerHTML = message;
//       return element;
//     };

//     axios
//       .post(URI_API, {
//         chat_id: CHAT_ID,
//         parse_mode: "html",
//         text: getMessage(),
//       })
//       .then((_res: AxiosResponse) => {
//         Swal.fire("Juda yaxshi!", "Habaringiz jo'natildi!", "success");
//       })
//       .catch((_err: ErrorEvent) => {
//         Swal.fire("Xatolik yuz berdi!", "Habaringiz jo'natilmadi!", "error");
//       })
//       .finally(() => {});
//   });

//   return (
//     <div>
//       {show ? (
//         <div className="form__container">
//           <form id="form" className="form">
//             <div className="form__group">
//               <label className="form__label">Ismingiz: </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form__input"
//                 placeholder="Yozing..."
//               />
//             </div>
//             <div className="form__group">
//               <label className="form__label">Pochtangiz: </label>
//               <input
//                 type="text"
//                 name="email"
//                 className="form__input"
//                 placeholder="Yozing..."
//               />
//             </div>
//             <div className="form__group">
//               <label className="form__label">Telefon raqamingiz: </label>
//               <input
//                 type="tel"
//                 name="number"
//                 className="form__input"
//                 placeholder="99124567"
//                 maxLength={12}
//               />
//             </div>
//             <div className="form__group">
//               <label className="form__label">Murojaatingiz: </label>
//               <textarea
//                 name="message"
//                 className="form__text"
//                 rows={5}
//                 placeholder="Yozing..."
//               ></textarea>
//             </div>

//             <button type="submit" className="form__button">
//               Jo'natish
//             </button>
//           </form>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default LoginForm;
