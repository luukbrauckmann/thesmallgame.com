import { StructuredText } from "react-datocms";
import Styles from "./CardBlock.module.scss";

interface Props {
  title: string;
  body: any;
}

const CardBlock = ({ title, body }: Props) => {
  return (
    <article className={Styles.card}>
      <h3>{title}</h3>
      <StructuredText data={body} />
    </article>
  );
}

export default CardBlock;
