import css from './ContactView.module.css'

const ContactView = () => {
    return (
        <>
            <div className={css.container}>
                <section className={css.empty}></section>
                <section className={css.containerText}>
                    <p>Mail: mi-and@outlook.com</p>
                </section>
                <section className={css.containerText}>
                    <p>LinkedIn</p>
                </section>
                <section className={css.containerText}>
                    <p>GitHub</p>
                </section>
                <section className={css.empty}></section>
            </div>
        </>
    )
}

export default ContactView