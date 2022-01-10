


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
                desc: "사용 패턴 추이를 확인 할 수 있는 화면 입니다."
            },
            {
                menuName: "결제수단",
                menuId: "1002",
                imgUrl: "/assets/icons/icoFace2.png",
                desc: "등록 된 결제 수단을 관리합니다"
            },
            {
                menuName: "문서",
                menuId: "1003",
                imgUrl: "/assets/icons/icoFace3.png",
                desc: "결제 내역에 대해 문서를 출력해보세요"
            }
        ]
    },

    {
        menuName : "API",
        menuId: "2000",
        imgUrl: "/assets/icons/icoHeart.png",
        subMenu: [
            {
                menuName: "사용자 인증",
                menuId: "2001",
                imgUrl: "/assets/icons/icoStar1.png",
                desc: "사용자 인증 api 를 호출합니다"
            },
            {
                menuName: "도메인 확인",
                menuId: "2002",
                imgUrl: "/assets/icons/icoStar2.png",
                actions: "설정 된 도메인의 유효성 여부를 체크합니다"

            }
        ]
    },

    {
        menuName : "지원",
        menuId: "3000",
        imgUrl: "/assets/icons/icoThunder.png",
        subMenu: [
            {
                menuName: "고객지원",
                menuId: "3001",
                imgUrl: "/assets/icons/icoStar4.png",
                desc: "고객 지원이 필요하신가요?"
            },
            {
                menuName: "파트너문의",
                menuId: "3002",
                imgUrl: "/assets/icons/icoOpen.png",
                desc: "파트너 문의 공간입니다"
            }
        ]
    }
];
export default Menu;