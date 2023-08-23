import Link from "next/link";
import styles from "./header.module.scss";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.item} href={"/"}>
        Главная
      </Link>
      <Link className={styles.item} href={"/profile"}>
        Дела
      </Link>
      <Link className={styles.item} href={"/friends"}>
        Друзья
      </Link>
    </div>
  );
};

export default Header;
