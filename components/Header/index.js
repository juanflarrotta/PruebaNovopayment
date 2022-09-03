import { useState } from "react"
import HeaderBar from "../HeaderBar"
import styles from "./header.module.scss"

export default function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <header className={styles.header}>
            <HeaderBar state={menu} />
        </header>
    )
}