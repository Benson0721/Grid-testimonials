import "./css/Section.css";

export default function Section({ section }) {
  const { Name, Summary, Content, Nickname } = section;

  return (
    <article
      className={`section-border ${Nickname == "daniel" ? "quotation" : ""}`}
      id={Nickname}
    >
      <div className="box">
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
