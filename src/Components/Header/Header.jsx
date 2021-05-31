import style from './Header.module.css'
import logo from '../../svg/emerald_top_menu_btn.svg'

export default (props) => {
    return(
        <div className={style.header}>
            <button>
                <img src={logo} alt="" />
                <p>Smaragd</p>
            </button>
            <button>
                Медіа
            </button>
            <button>
                Редагування
            </button>
            <button>
                Фільтри
            </button>
            <button>
                Збереження
            </button>
        </div>
    )
}