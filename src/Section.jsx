import "./css/Section.css";

export default function Section({ data }) {
  const { Name, Summary, Content, Nickname } = data;

  return (
    <article
      className={`section section--${Nickname} ${
        Nickname == "daniel" ? "section--with-bg-img" : ""
      }`}
    >
      <header className="section__header">
        <figure className={`section__headshot`}>
          <img
            src={`./images/image-${Nickname}.jpg`}
            alt="headshot"
            className="section__headshot-image"
          />
        </figure>
        <section className="section__person">
          <b className={`section__name `}>{Name}</b>
          <p className={`section__cert `}>Verified Graduate</p>
        </section>
      </header>
      <section>
        <h2 className={`section__summary`}>{Summary}</h2>
        <p className={`section__content`}>{Content}</p>
      </section>
    </article>
  );
}
