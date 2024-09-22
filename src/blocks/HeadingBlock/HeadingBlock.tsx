import type { JSX } from "preact/jsx-runtime";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

const HeadingBlock = ({ level, text }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag>{text}</Tag>
  );
}

export default HeadingBlock;
