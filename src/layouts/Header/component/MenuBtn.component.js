import { useCallback } from 'react';

const MENU_ICON_PATH = "/assets/icons/imgList.png";
const MenuBtn = ({isOpenSideMenu, setOpenSideMenu}) => {

    const onClickMenuBtn = useCallback(()=>{
        setOpenSideMenu(!isOpenSideMenu);
    },[isOpenSideMenu]);

    return (
        <div onClick={onClickMenuBtn}>
            <img alt="none" className={"top-icon"} src={MENU_ICON_PATH}/>
        </div>
    )
}
export default MenuBtn;