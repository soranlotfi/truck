
interface NavItem{
    text :string
    name :string,
    path :string,
    id:number

}


export const NavList :NavItem[] = [
    {
        name:"mainpage",
        text : "صفحه ی اصلی ",
        path :"/",
        id:0
    },{
        name:"drivers",
        text : "رانندگان ",
        path :"/drivers",
        id:1
    },{
        name:"owners",
        text : "صاحبان بار ",
        path :"/owners",
        id:2
    },{
        name:"aboutus",
        text : "درباره ی ما ",
        path :"/aboutus",
        id:3
    },
]

export default NavList