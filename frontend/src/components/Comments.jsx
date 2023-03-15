import React from "react";
import "../css/Comments.css";
    
const Comments = () => {
  return (
    <div>
      <div className="comment_inputs">
        <div className="comment_input ">
          <p className="plus_p">Достоинства</p>
          <input
            type="text"
            name=""
            id=""
            className="plus_inp"
            placeholder="Что вам понравилось"
          />
        </div>
        <div className="comment_input ">
          <p className="minus_p">Недостатки</p>
          <input
            type="text"
            name=""
            id=""
            className="minus_inp"
            placeholder="Что не оправдало ожиданий"
          />
        </div>
        <div className="comment_input ">
          <p className="comment_p">Комментарий</p>
          <input
            type="text"
            name=""
            id=""
            className="comment_inp"
            placeholder="Другие впечатления"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
