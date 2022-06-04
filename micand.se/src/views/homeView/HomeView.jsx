import css from './HomeView.module.css'
import githubIcon from '../../utils/images/github.png'

const HomeView = () => {
    return (
        <div className={css.homeView}>
            <section>
                <p className={css.bigText}>Michaela Andreasson</p>
                <p className={css.smallText}>Web designer and full-stack developer</p>
                <p className={css.localText}>📍 Stenungsund / Gothenburg</p>
            </section>
            <section className={css.article}>
                <img src={githubIcon} alt="github" className={css.githubImage}/>
            </section>
        </div>
    )
}

export default HomeView