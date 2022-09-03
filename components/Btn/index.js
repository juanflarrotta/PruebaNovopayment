import Icon from "../Icon";

export default function Btn(props) {
    const { className, text, icon, clickHandler, fontIcon } = props;

    return (
        <button
            className={className}
            type="button"
            onClick={clickHandler}
        >
            {text && <span> {text} </span>}
            {fontIcon && fontIcon}
            {icon && <Icon icon={icon} />}
        </button>
    )
}