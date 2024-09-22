import { StructuredText } from "react-datocms";

interface Props {
  title: string;
  body: any;
}

const CardBlock = ({ title, body }: Props) => {
  return (
    <article>
      <h3>{title}</h3>
      <StructuredText data={body} />
    </article>
  );
}

export default CardBlock;
