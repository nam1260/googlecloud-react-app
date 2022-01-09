import { useCallback } from 'react';

const MENU_ICON_PATH = "/assets/images/list.png";
const Menu = ({isOpenSideMenu, setOpenSideMenu}) => {

    const onClickMenuBtn = useCallback(()=>{
        setOpenSideMenu(!isOpenSideMenu);
    },[isOpenSideMenu]);

    return (
        <div onClick={onClickMenuBtn}>
            <img alt="none" className={"top-icon"} src={MENU_ICON_PATH}/>
        </div>
    )
}
export default Menu;