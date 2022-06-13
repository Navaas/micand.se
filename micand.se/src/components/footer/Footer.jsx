import css from './Footer.module.css'

function Footer() {
    return (
        <footer className={css.container}>
            <section>
                <p className={css.text}>© 2022 Created and Built by Michaela Andreasson</p>
            </section>
        </footer>
    )
}

export default Footer