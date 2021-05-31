import style from './BotNav.module.css'
import NavigationButtonsContainer from './NavigationButtons/NavigationButtonsContainer'
import ProfileButton from './ProfileButton/ProfileButton'

export default (props) => {
    return(
        <div className={style.botNavBar}>
            
            <NavigationButtonsContainer />
            <ProfileButton />

        </div>
    )
}