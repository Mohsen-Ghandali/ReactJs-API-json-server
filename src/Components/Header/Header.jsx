const Header = () => {
    return ( 
 <header>
    <div>
        <img src={require("../../Images/logo-design.png")} alt="Logo" />
    </div>
    <div>
        <ul>
            <li><a href="/home">Hoaus</a></li>
            <li><a href="#products">Produkte</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/about">Über us</a></li>
        </ul>
    </div>
 </header>
     );
}
 
export default Header;