


const Menu = [
    {
        menuName : "결제",
        menuId: "1000",
        imgUrl: "/assets/icons/icoEdit.png",
        subMenu: [
            {
                menuName: "보고서",
                menuId: "1001",
                imgUrl: "/assets/icons/icoFace1.png",
                actions:[

                ]
            },
            {
                menuName: "결제수단",
                menuId: "1002",
                imgUrl: "/assets/icons/icoFace2.png",
                actions:[

                ]
            },
            {
                menuName: "문서",
                menuId: "1003",
                imgUrl: "/assets/icons/icoFace3.png",
                actions:[
                    "인쇄",
                    "새로고침",
                    "전송"
                ]
            }
        ]
    },

    {
        menuName : "API 및 서비스",
        menuId: "2000",
        imgUrl: "/assets/icons/icoHeart.png",
        subMenu: [
            {
                menuName: "사용자 인증 정보",
                menuId: "2001",
                imgUrl: "/assets/icons/icoStar1.png",
                actions:[

                ]
            },
            {
                menuName: "도메인 확인",
                menuId: "2002",
                imgUrl: "/assets/icons/icoStar2.png",
                actions:[

                ]
            }
        ]
    },

    {
        menuName : "지원",
        menuId: "3000",
        imgUrl: "/assets/icons/icoThunder.png",
        subMenu: [
            {
                menuName: "개요",
                menuId: "3001",
                imgUrl: "/assets/icons/icoStar4.png",
            },
            {
                menuName: "케이스",
                menuId: "3002",
                imgUrl: "/assets/icons/icoOpen.png",
            }
        ]
    }
];
export default Menu;