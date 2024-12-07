import "./css/Section.css";

export default function Section({ section }) {
  const { Name, Summary, Content, Nickname } = section;

  return (
    <article className="section-border" id={Nickname}>
      <div className="box" role="region" aria-label="article-area">
        {Nickname == "daniel" ? (
          <svg
            width="104"
            height="102"
            xmlns="http://www.w3.org/2000/svg"
            className="quotation"
          >
            <path
              d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
              fill="#A775F1"
              fill-rule="nonzero"
            />
          </svg>
        ) : (
          ""
        )}
        <header className="header">
          <figure
            className={`headshot ${
              Nickname === "daniel" || Nickname === "patrick" ? "purple" : ""
            }`}
          >
            <img src={`./images/image-${Nickname}.jpg`} alt="headshot" />
          </figure>
          <div className="text-field">
            <b className="name">{Name}</b>
            <p className="cert">Verified Graduate</p>
          </div>
        </header>
        <section className="summary">
          <b>{Summary}</b>
        </section>
        <section className="content">
          <p>{Content}</p>
        </section>
      </div>
    </article>
  );
}
