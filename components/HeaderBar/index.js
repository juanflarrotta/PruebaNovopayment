import Link from "next/link";
import Icon from "../Icon";

import styles from "./headerBar.module.scss"

export default function HeaderBar() {

    return (
        <div className={styles.header__bar}>
            <Link href='/'>
                <a>
                    <Icon icon="logo" className={styles.header__logo} />
                </a>
            </Link>

        </div>
    )
}