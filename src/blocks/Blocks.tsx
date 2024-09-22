interface Props {
  blocks: any[];
}

const blockModules = import.meta.glob('./**/*.tsx', { eager: true });

const Blocks = ({ blocks }: Props) => {
  return (
    <>{blocks.map((block, index) => {
        const name = block.__typename.replace('Record', 'Block');
        const Block = (blockModules[`./${name}/${name}.tsx`] as any).default;
        return <Block key={`${block.__typename}_${index}`} {...block} />;
      })}
    </>
  )
};

export default Blocks;
