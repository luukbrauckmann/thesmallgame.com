import { StructuredText } from "@components";

interface Props {
  title: string;
  body: any;
}

const CardBlock = ({ title, body }: Props) => {
  return (
    <article>
      <h3>{title}</h3>
      <StructuredText {...body} />
    </article>
  );
}

export default CardBlock;
