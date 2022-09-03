import { icons } from '../../utils/constants';

export default function Icon(props) {
    const { icon, className } = props;

    return <span className={className}>{icons[icon]}</span> || null;
}