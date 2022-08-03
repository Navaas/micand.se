import css from './PortfolieView.module.css'
import image1 from '../../utils/images/pencil.png'
import image2 from '../../utils/images/profile.png'
import image3 from '../../utils/images/wait.png'


const PortfolieView = () => {
    return (
        <>
            <section>
                <h1 className={css.textContact}>Portfolie</h1>
            </section>
            <div className={css.container}>
                <section>
                    <h1 className={css.text}>TodoList</h1>
                    <h3 className={css.smallText}>React, JavaScript</h3>
                    <img src={image1} alt="image1" className={css.image}/>
                    <br/>
                    <br/>
                    <a href="https://github.com/micand89/Portfolie/tree/main/Datalagring" method="get" target="_blank"><button className={css.button}>View</button></a>
                </section>
                <section className={ `${css.sectionBox} ${css.sectionBorder}`} >
                    <h1 className={css.text}>SmurfBook</h1>
                    <h3 className={css.smallText}>React, TypeScript</h3>
                    <img src={image2} alt="image2" className={css.image}/>
                    <br/>
                    <br/>
                    <a href="https://github.com/EmilHaqvinsson/fullstack-uppgift" method="get" target="_blank"><button className={css.button}>View</button></a>
                </section>
                <section>
                    <h1 className={css.text}>Webbshop</h1>
                    <h3 className={css.smallText}>React, JavaScript</h3>
                    <img src={image3} alt="image3" className={css.image}/>
                    <br/>
                    <br/>

                    <a href="https://github.com/micand89/Portfolie/tree/main/Webbutveckling_2%20-%20webbshop/webbshop" method="get" target="_blank"><button className={css.button}>View</button></a>
                </section>
            </div>
        </>
    )
}

export default PortfolieView