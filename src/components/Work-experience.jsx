import React from "react";

const EndOrNowComponent = ({ date }) => {
  return !date ? (
    <span className="-now" title="up until today">
      now
    </span>
  ) : (
    <span>{date}</span>
  );
};

export default function WorkExperience({ data }) {
  return (
    <article className="article-block">
      <h4 className="article-title">{data.blockname}:</h4>

      <ul className="article-list">
        {data.list.map((w) => (
          <li key={w.name} className={w.descr ? "-detailed" : ""}>
            {w.name} ({w.start} — <EndOrNowComponent date={w.end} />)
            <p dangerouslySetInnerHTML={{ __html: w.descr }} />
          </li>
        ))}
      </ul>
    </article>
  );
}
