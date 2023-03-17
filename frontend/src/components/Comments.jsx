// import axios from "axios";
// import React, { useState } from "react";
// import "../css/Comments.css";

// const Comments = () => {
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState([]);
//   const [user] = useState(JSON.parse(localStorage.getItem("user")) || null);


//   async function addReview(e) {
//     e.preventDefault();
//     if (user) {
//       if (comment) {
//         await axios
//           .post("http://localhost:1337/api/comment", {
//             data: {
//               customer: user,
//               product: product.id,
//               body: comment,
//             },
//           })
//           .then((res) => {
//             setComment("");
//             loadComment();
//           });
//       } else {
//         alert("Запольните поля");
//       }
//     } else {
//       navigate("/sign-in");
//     }
//   }
//   return (
//     <div className="comment_section">
//       <div className="comment_columns">
//         <div className="comment_column comment_is-40">
//           <p className="plus">Плюсы</p>
//           <br />
//           <p className="minus">Недостатки</p>
//           <br />
//           <p className="kommentariy">Комментарий</p>
//           <br />
//         </div>
//         <div className="comment_column comment_is-60">
//           <br />
//           <div className="comment_input ">
//             <textarea
//               type="text"
//               name=""
//               id=""
//               className="plus_inp"
//               placeholder="Что вам понравилось"
//             />
//           </div>
//           <br />
//           <div className="comment_input ">
//             <textarea
//               type="text"
//               name=""
//               id=""
//               className="minus_inp"
//               placeholder="Что не оправдало ожиданий"
//             />
//           </div>
//           <br />
//           <div className="comment_input ">
//             <textarea
//               type="text"
//               name=""
//               id=""
//               className="comment_inp"
//               placeholder="Другие впечатления"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comments;
