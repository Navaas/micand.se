import css from './PortfolieView.module.css'
import image1 from '../../utils/images/pencil.png'
import image2 from '../../utils/images/profile.png'
import image3 from '../../utils/images/wait.png'


const PortfolieView = () => {
    return (
        <div className={css.container}>
            <section>
                <h1>TodoList</h1>
                <h3>React, JavaScript</h3>
                <img src={image1} alt="image1" className={css.image}/>
                <br/>
                <br/>
                <button className={css.button}>View</button>
            </section>
            <section className={css.border}>
                <h1>SmurfBook</h1>
                <h3>React, TypeScript</h3>
                <img src={image2} alt="image2" className={css.image}/>
                <br/>
                <br/>
                <button className={css.button}>View</button>
            </section>
            <section>
                <h1>Webbshop</h1>
                <h3>React, JavaScript</h3>
                <img src={image3} alt="image3" className={css.image}/>
                <br/>
                <br/>
                <button className={css.button}>View</button>
            </section>
        </div>
    )
}

export default PortfolieView