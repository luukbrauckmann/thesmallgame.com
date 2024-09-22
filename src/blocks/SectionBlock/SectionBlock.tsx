import { Blocks } from '@blocks';
import Styles from './SectionBlock.module.scss';

const SectionBlock = ({ title, body }: any) => {
  return (
    <section className={Styles['section-block'] }>
      <h2>{title}</h2>
      <div>
        <Blocks blocks={body} />
      </div>
    </section>
  );
}

export default SectionBlock;
