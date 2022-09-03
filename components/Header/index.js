import HeaderBar from "../HeaderBar"
import styles from "./header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderBar />
        </header>
    )
}