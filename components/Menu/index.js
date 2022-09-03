import Link from "next/link";
import { texts } from "../../utils/constants";
import styles from "./menu.module.scss"

export default function Menu(props) {

    const { active, data } = props;
    const { lista } = data;
    let menuItems = [];

    function organizeData(params) {
        const mock = [];
        params.map((item) => {
            for (const text in item) {
                const newObje = {
                    name: text,
                    child: []
                }
                if (item[text].length > 0) {
                    newObje.child = organizeData(item[text]);
                }
                mock.push(newObje);
            }
        });
        menuItems = [...mock];
        return [...mock]
    };
    organizeData(lista);

    const items = menuItems.map((item) => {
        return (
            <li className={styles.menu__item} key={item.name}>
                <Link href="/">
                    <a>
                        {texts[item.name]}
                    </a>
                </Link>


            </li>
        )
    })

    return (
        <nav className={`${styles.menu} ${active ? styles.menu__active : ''}`}>
            <ul className={styles.menu__list}>
                {items}
            </ul>
        </nav>
    )
}