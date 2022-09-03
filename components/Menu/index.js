import Link from "next/link";
import styles from "./menu.module.scss"

export default function Menu(props) {

    const { active } = props;

    return (
        <nav className={`${styles.menu} ${active ? styles.menu__active : ''}`}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <Link href="/">
                        <a>
                            juan
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}