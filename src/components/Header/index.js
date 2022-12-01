import style from './style.module.css'; 
import Banner from '../../img/Rick_and_Morty_title_card_(cropped).png'; 

const Header = () => (
    <header className={style.container}>
        <img className={style.content_image} src={Banner} alt={'banner'}/>
    </header>
); 

export default Header; 
