import eagleImg from '../assets/eagle-sign.png';
export default function Header() {
    return <header>
        <img src={eagleImg}  alt="Polish eagle logo" width="230" height="200"/>
        <h1> Polish History Quiz </h1>
    </header>
}