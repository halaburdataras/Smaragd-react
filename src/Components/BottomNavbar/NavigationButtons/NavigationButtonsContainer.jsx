import NavButton from './NavButton/NavButton'
import style from './NavigationButtons.module.css'
import inactiveMediaImg from '../../../svg/inactiveMedia.svg'
import inactiveEditImg from '../../../svg/inactiveEdit.svg'
import inactiveFiltersImg from '../../../svg/inactiveFilters.svg'
import inactiveSaveImg from '../../../svg/inactiveSave.svg'

export default (props) => {
    return(
        <div className={style.navBtnContainer}>
            <NavButton img={inactiveMediaImg}/>
            <NavButton img={inactiveEditImg} />
            <NavButton img={inactiveFiltersImg} />
            <NavButton img={inactiveSaveImg} />
        </div>
    )
}