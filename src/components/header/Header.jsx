import styles from './header.module.css'

function Header() {
    return (

        <header >
            <div className="container">

                <nav>
                    <div className={styles.logo}>
                        <img src="./logo.png" alt="logo"/>
                        <p>Abduvahob</p>
                         </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Works</a></li>
                    </ul>
                </nav>
            </div>


        </header>

    )
}

export default Header
