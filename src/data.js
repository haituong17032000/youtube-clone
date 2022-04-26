const data =[
    {
        src: "https://i.ytimg.com/vi/5KfoXHWzcLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn7Ffi2viA5GI7PO5Mw7kUFvc9Lg",
        logo: "https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s68-c-k-c0x00ffffff-no-rj",
        title: "Video bổ sung: React đã có version 18",
        chanel: "F8 Official",
        view: "510",
        time: "1 giờ trước"
    },
    {
        src: "https://i.ytimg.com/vi/hjIxfXKmkjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDjBaTBqbp2Dp6K36-NeBDvJ9nSw",
        logo: "https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s68-c-k-c0x00ffffff-no-rj",
        title: "React useEffect hook cho người mới",
        chanel: "F8 Official",
        view: "21 N",
        time: "6 tháng trước"
    },
    {
        src: "https://i.ytimg.com/vi/1EBe-l1E3pM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ImOyD1wSwq33zsy05CG_pUbXRA",
        logo: "https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s68-c-k-c0x00ffffff-no-rj",
        title: "Tạo dự án với React + Webpack",
        chanel: "F8 Official",
        view: "21 N",
        time: "6 tháng trước"
    },
    {
        src: "https://i.ytimg.com/vi/2hYLkJj6ncI/hq720_live.jpg?sqp=CPDGn5MG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6OIhZ4GV-HMaRDWKvFvOjwcedzA",
        logo: "https://yt3.ggpht.com/6PB4rOTiWoP2XrvsJbeMSFmj6K5XTO9iZVonJ2p3fFOwRKSJml2peFkGnpJGuLOnvy-sThV1aQ=s68-c-k-c0x00ffffff-no-rj",
        title: "T1 Faker",
        chanel: "T1 Faker",
        view: "18 N",
        time: "1 giờ trước"
    },
    {
        src: "https://i.ytimg.com/vi/7nkkMA2XBpg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtdu75ZT8NZuraBFBP3Wezc7yOyw",
        logo: "https://yt3.ggpht.com/6PB4rOTiWoP2XrvsJbeMSFmj6K5XTO9iZVonJ2p3fFOwRKSJml2peFkGnpJGuLOnvy-sThV1aQ=s68-c-k-c0x00ffffff-no-rj",
        title: "T1 Keria",
        chanel: "T1 Keria",
        view: "3,2 N",
        time: "1 giờ trước"
    },
    {
        src: "https://i.ytimg.com/vi/jBzwzrDvZ18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzdXWT7-jbNSBa1ySX9scrbBi_nA",
        logo: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj",
        title: "Python Backend Web Development",
        chanel: "freeCodeCamp.org",
        view: "816 N",
        time: "9 tháng trước"
    },
    {
        src: "https://i.ytimg.com/vi/ZTI_S2OnoTs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWL1yopyeODg_sQ89ZqdBz1z-cKg",
        logo: "https://yt3.ggpht.com/ONSI_udEvYURXsCfmoqmW9mmQ_M21fMxqx3zNuUGQDx0QXGxhF6bbI4AIHIoKrzMSix3GdCS4Q=s68-c-k-c0x00ffffff-no-rj",
        title: "Chiến tranh Pháp- Đại Nam | Nam Kỳ",
        chanel: "Thanh Pahm",
        view: "1.5 Tr",
        time: "5 ngày trước"
    },
    {
        src: "https://i.ytimg.com/vi/R_lIzcPFDAM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk98kRaaBwT_yPTAXbMYlgneRYTQ",
        logo: "https://yt3.ggpht.com/ETQEwimO0g1jL2UX1EoAZlqTiNM6akalKr8ADbUetO5LoZjKlU6_GDnUlNVI8go9aA5ENqAWNrk=s68-c-k-c0x00ffffff-no-rj",
        title: "See tình - Hoàng Thùy Linh",
        chanel: "Un's pure secret",
        view: "290 N",
        time: "2 tháng trước"
    },
    {
        src: "https://i.ytimg.com/vi/aZu084TPInE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOsdyRIPrblPoBOy6_yb086JZuhA",
        logo: "https://yt3.ggpht.com/ytc/AKedOLRNFLCMjPktRxac875zHMNjIa4tGp4Dw7AYWTFsJA=s68-c-k-c0x00ffffff-no-rj",
        title: "make google with 1 line",
        chanel: "Alex Lee",
        view: "1 Tr",
        time: "2 năm trước"
    },
    {
        src: "https://i.ytimg.com/vi/y6vSUtMWyes/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNkvjXyKYJTbT3dIB1VMCt-322xQ",
        logo: "https://yt3.ggpht.com/ytc/AKedOLQ4sKDacJ6qn4VA4N6DcROBAUdVroDuHn5h88mrPg=s68-c-k-c0x00ffffff-no-rj",
        title: "Cốt truyện Elden Ring",
        chanel: "Phê Game",
        view: "320 N",
        time: "1 tháng trước"
    },
    {
        src: "https://i.ytimg.com/vi/PFS7fT9OxGI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKeqorLckir5XtxjBO_ORBmbrvCQ",
        logo: "https://yt3.ggpht.com/ytc/AKedOLQaWYei_iooj6n9vYSM4cuji13hQhz8ZoJ4tryS=s68-c-k-c0x00ffffff-no-rj",
        title: "3-Star Collector Kai'sa",
        chanel: "Shawn TFT",
        view: "79 N",
        time: "2 ngày trước"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqTTcOTvkZyf-6uIWCdHzC1Fr6rRTORU-5A&usqp=CAU",
        logo: "https://yt3.ggpht.com/7FlKwMyotApIow-_l6-kMW0wZ-tp9K5PoIsV415JXureRCxIRYLop5wVdRxGmQIvevVBDpFggw=s48-c-k-c0x00ffffff-no-rj",
        title: "Yae Miko: Tiếu ngạo giang hồ",
        chanel: "Genshin Impact",
        view: "1.7 Tr",
        time: "2 tháng trước"
    },
]

export default data;