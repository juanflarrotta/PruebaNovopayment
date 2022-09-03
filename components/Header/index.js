import { useState } from "react"

import styles from "./header.module.scss"

import Menu from "../Menu";
import HeaderBar from "../HeaderBar"

export default function Header(props) {
    const { data } = props;
    const [menu, setMenu] = useState(false);
    return (
        <header className={styles.header}>
            <HeaderBar menu={menu} setMenu={setMenu} />
            <Menu active={menu} data={data} />
        </header>
    )
}