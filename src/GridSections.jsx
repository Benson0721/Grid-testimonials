import Section from "./Section";
import { datas } from "../datas";
import "./scss/GridSesctions.scss";

export default function GridSection() {
  return (
    <>
      <div className="layout" role="region" aria-label="all-post">
        {datas.map((data, idx) => {
          return <Section data={data} key={idx} />;
        })}
      </div>
    </>
  );
}
