import css from './ContactView.module.css'
import mail from '../../utils/images/mail.png'
import linkedIn from '../../utils/images/linkedin1.png'
import github from '../../utils/images/github.png'


const ContactView = () => {
    return (
        <>
            <section className={css.section}>
                <h1 className={css.textContact}>Contact me</h1>
            </section>
            <div className={css.container}>
                <section>
                </section>
                <section className={css.gridContainer}>
                    <div className={css.flipCard}>
                        <div className={css.flipCardInner}>
                            <div className={css.flipCardFront}>
                                <img className={css.image} src={mail} alt="logo"/>
                            </div>
                            <div className={css.flipCardBack}>
                                <p className={css.text}>Send me a mail</p>
                                <p className={css.text}>mi-and@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={css.gridContainer}>
                    <div className={css.flipCard}>
                        <div className={css.flipCardInner}>
                            <div className={css.flipCardFront}>
                                <img className={css.image} src={linkedIn} alt="github"/>
                            </div>
                            <div className={css.flipCardBack}>
                                <p className={css.text}>Check out my LinkedIn</p>
                                <form action="https://github.com/micand89/Portfolie" method="get" target="_blank">
                                    <button type="submit" className={css.button}>View</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={css.gridContainer}>
                    <div className={css.flipCard}>
                        <div className={css.flipCardInner}>
                            <div className={css.flipCardFront}>
                                <img className={css.image} src={github} alt="github"/>
                            </div>
                            <div className={css.flipCardBack}>
                                <p className={css.text}>Check out some of my project on github</p>
                                <form action="https://www.linkedin.com/in/michaela-andreasson-421824224/" method="get"
                                      target="_blank">
                                    <button type="submit" className={css.button}>View</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                </section>
            </div>
        </>
    )
}

export default ContactView