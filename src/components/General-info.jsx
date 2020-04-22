import React from "react";

export default function GeneralInfo({data}) {
  return (
    <article className="article-block">
      <h4 className="article-title">{data.blockname}:</h4>

      <p className="article-descr">
        <span>{data["date-of-birth"].key}:</span> {data["date-of-birth"].val}
      </p>
    </article>
  );
}
