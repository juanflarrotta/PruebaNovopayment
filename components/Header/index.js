import { useState } from "react"

import Menu from "../Menu";
import HeaderBar from "../HeaderBar"

export default function Header(props) {
    const { data } = props;
    const [menu, setMenu] = useState(false);
    return (
        <header>
            <HeaderBar menu={menu} setMenu={setMenu} />
            <Menu isActive={menu} list={data.lista} />
        </header>
    )
}