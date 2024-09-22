interface Props {
  blocks?: any;
  links?: any;
  value?: any;
}

const StructuredText = ({ blocks, links, value }: Props) => {
  return (
    <>
      { blocks && (<pre>{ JSON.stringify(blocks, null, 2) }</pre>) }
      { links && (<pre>{ JSON.stringify(links, null, 2) }</pre>) }
      { value && (<pre>{ JSON.stringify(value, null, 2) }</pre>) }
    </>
  );
}

export default StructuredText;
