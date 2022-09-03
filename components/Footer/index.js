import { texts, icons } from "../../utils/constants";

import styles from "./footer.module.scss";
import Icon from "../Icon";

export default function Footer() {
    const year = new Date();

    return (
        <footer className={styles.footer}>
            <Icon icon="text" className={styles.footer__logo} />
            <span className={styles.footer__copyright}>{`${icons.copyright} ${year.getFullYear()} ${texts.copyright}`}</span>
            <Icon icon="text" className={styles.footer__logo} />
        </footer>
    )
} 