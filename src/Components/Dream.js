import React from "react";

const Dream = ({ data }) => {
  if (data) {
    var dream = data.dream.map(function (dream) {
      return (
        <li key={dream.text}>
          <blockquote>
            <p>{dream.text}</p>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="dream">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client dream</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{dream}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
