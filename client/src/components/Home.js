export default function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Добре дошли в Gourmet Bistro</h1>
                <p>Кулинарното изживяване, което заслужавате</p>
                <button className="cta-button">Разгледайте менюто</button>
            </div>
            <div className="home-showcase">
                <img
                    src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
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
            </div>
        </div>
    );
}
