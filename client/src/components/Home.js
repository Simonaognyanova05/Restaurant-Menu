import { Link } from 'react-router-dom';
import { categories } from '../config/categories';

export default function Home() {
    return (
        <div className="home-container">
            <section className="home-hero" aria-labelledby="welcome-title">
                <div className="home-header">
                    <p className="eyebrow">Добре дошли на нашата трапеза</p>
                    <h1 id="welcome-title">Под старата<br /><em>круша</em><span className="title-dot">.</span></h1>
                    <div className="hero-rule" />
                    <p className="hero-description">Традиционна българска кухня.<br />В сърцето на Копривщица.</p>
                    <a className="text-link" href="#our-menu">Нашето меню <span aria-hidden="true">↗</span></a>
                    <span className="hero-footnote">Добрата храна събира.</span>
                </div>
                <figure className="home-showcase">
                    <img src="https://i.imgur.com/eb7rUrD.jpeg" alt="Под старата круша" className="showcase-image" fetchPriority="high" />
                    <figcaption><span>Под старата круша</span><span>Копривщица, България</span></figcaption>
                </figure>
            </section>
            <section className="home-menu" id="our-menu" aria-labelledby="our-menu-title">
                <div className="section-heading">
                    <div><p className="eyebrow">Вкусът на традицията</p><h2 id="our-menu-title">Нашето меню</h2></div>
                    <p>От първата хапка<br />до последния сладък миг.</p>
                </div>
                <div className="category-index">
                    {categories.map(({ label, path }, index) => (
                        <Link to={`/${path}`} key={path} className="category-entry">
                            <span className="category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            <span>{label}</span><span className="category-arrow" aria-hidden="true">↗</span>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="home-intro">
                <p className="eyebrow">С внимание към всяко ястие</p>
                <h2>Познатият вкус.<br /><em>Удоволствието да останеш.</em></h2>
                <p>Българска кухня, приготвена с грижа, и традиционна копривщенска обстановка. Заповядайте на нашата трапеза.</p>
            </section>
        </div>
    );
}
