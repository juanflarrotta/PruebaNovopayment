import Link from "next/link";
import PropTypes from "prop-types";

import { texts } from "../../utils/constants";
import { sortMenuList, arrayHasElements } from "../../utils";
import styles from "./menu.module.scss";

export default function Menu(props) {
    const { isActive, list } = props;
    const menuItems = list.map((listItem) => sortMenuList(listItem));

    function renderSub(subitems) {
        if (arrayHasElements(subitems)) {
            return (
                <ul className={styles.menu__list__second}>
                    {subitems.map((item) => {
                        return (
                            <li className={styles.menu__item__second} key={`submenu-${item.name}`}>
                                <Link href="/">{texts[item.name]}</Link>
                                {renderSub(item.child)}
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }

    return (
        !!list && (
            <nav className={`${styles.menu} ${isActive ? styles.menu__active : ""}`}>
                {arrayHasElements(menuItems) &&
                    menuItems.map((items) => {
                        return (
                            <ul className={styles.menu__list} key={`menu-${items}`}>
                                {items.map((item) => {
                                    return (
                                        <li className={styles.menu__item} key={item.name}>
                                            <Link href="/">{texts[item.name]}</Link>
                                            {!!item.child && renderSub(item.child)}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
            </nav>
        )
    );
}

Menu.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
