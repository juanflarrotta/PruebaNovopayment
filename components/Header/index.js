import { useState } from "react"

import styles from "./header.module.scss"

import Menu from "../Menu";
import HeaderBar from "../HeaderBar"

export default function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <header className={styles.header}>
            <HeaderBar menu={menu} setMenu={setMenu} />
            <Menu active={menu} />
        </header>
    )
}