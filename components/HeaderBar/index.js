import { FaHouseUser, FaAngleDown, FaTimes, FaGripLines } from "react-icons/fa";
import styles from "./headerBar.module.scss"
import { icons } from '../../utils/constants';

import Link from "next/link";
import Btn from "../Btn";
import Icon from "../Icon";
import { useState } from "react";

export default function HeaderBar(props) {
    const { menu, setMenu } = props;

    return (
        <div className={styles.header__bar}>
            <Btn
                className={styles.header__btn}
                fontIcon={menu ? <FaTimes size={20} color="white" /> : <FaGripLines size={20} color="white" />}
                clickHandler={() => { setMenu(!menu) }}
            />
            <Link href='/'>
                <a>
                    <Icon icon="logo" className={styles.header__logo} />
                </a>
            </Link>
            <Btn
                className={`${styles.header__icon} ${styles.header__icon__mobile}`}
                fontIcon={<FaHouseUser size={15} color="white" />}
            />
            <Btn
                className={`${styles.header__icon} ${styles.header__icon__desktop}`}
                text={icons.user}
                fontIcon={<FaAngleDown size={15} color="white" />}
            />
        </div>
    )
}