import style from '../NavigationButtons.module.css'

export default (props) => {
    return(
        <button className={style.navButton}>
            <img src={props.img} alt="" />
        </button>
    )
}