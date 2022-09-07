import './styles.css'
import logo from '../../assets/img/logo.svg'
function Header() {

    return (
        <>
           <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMETA_</h1>
            <p>
              Desenvolvido por Luciano no Semana SpringReact
            </p>
        </div>
    </header>
        </>
    )

}

export default Header
