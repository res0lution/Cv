import React from "react";

import Photo from "../images/person.jpg";

export default function TopBio({ data }) {
  return (
    <article className="top-bio__wrap">
      <img
        className="top-bio__photo"
        src={Photo}
        alt={data.fullname}
        title="Hello! It's me"
      />

      <div className="top-bio__rightside">
        <h2 className="top-bio__fullname">{data.fullname}</h2>
        <p className="top-bio__title">{data.title}</p>

        <ul className="top-bio__links">
          {data.links.map((l) => (
            <li key={l.href}>
              {l.name}:{" "}
              <a href={l.href} target={l.targetBlank ? "_blank" : "_self"}>
                {l.val}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
