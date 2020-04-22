import React from "react";

export default function Skills({data}) {
  return (
    <article className="article-block">
      <h4 className="article-title">{data.blockname}:</h4>

      <ul className="article-list">
        {data.list.map((skill) => {
          return (
            <li key={skill.name} className={skill.descr ? "-detailed" : ""}>
              {skill.name}
              {skill.descr && (
                <p dangerouslySetInnerHTML={{ __html: skill.descr }} />
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
