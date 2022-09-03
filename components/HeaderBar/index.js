import Link from "next/link";
import Icon from "../Icon";

import styles from "./headerBar.module.scss"

export default function HeaderBar(params) {

    const { className } = params;

    return (
        <div className={className}>
            <Link href='/'>
                <a>
                    <Icon icon="logo" className={styles.header__logo} />
                </a>
            </Link>
        </div>
    )
}