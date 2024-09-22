import { LocaleSelector } from "@components";
import Styles from "./MainHeader.module.scss";

const MainHeader = () => {
  return (
    <header className={Styles['main-header']}>
      <LocaleSelector />
    </header>
  );
};

export default MainHeader;
