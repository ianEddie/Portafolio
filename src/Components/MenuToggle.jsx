///
import { CloseIcon, MenuIcon } from "../Assets/Logos&Icons"
///
export function MenuToggle({ handleClick, toggle }) {
    return (
        <div onClick={handleClick} className="sm:hidden absolute right-5 top-3 z-40">
            {
                toggle ? <MenuIcon /> : <CloseIcon />
            }
        </div>
    )
}