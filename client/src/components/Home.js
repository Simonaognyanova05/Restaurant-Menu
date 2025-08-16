export default function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Добре дошли в "Под старата круша"</h1>
                <p>Традиционна бългрска кухня, в традиционна копривщенска обстановка</p>
            </div>
            <div className="home-showcase">
                <img
                    src="https://i.imgur.com/oVzJ0Bj.jpeg"
                    alt="Gourmet Food"
                    className="showcase-image"
                />
            </div>
            <div className="home-intro">
                <h2>Кулинарни изкушения</h2>
                <p>
                    Нашите ястия са създадени с най-добрите съставки и приготвени с внимание към детайла.
                    Опитайте вкусове, които ще ви накарат да се върнете отново!
                </p>
                <p>
                    Обявените цени са в български лева и в евро и са за един брой!
                </p>
                <p>
                    The prices are in Bulgarian leva and EURO!
                </p>
            </div>
        </div>
    );
}
