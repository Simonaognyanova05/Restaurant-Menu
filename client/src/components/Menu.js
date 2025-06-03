export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1>Gourmet Bistro</h1>
                <p>Деликатесни ястия, приготвени с любов</p>

            </div>

            <div className="menu-section" id="appetizers">
                <h2>Предястия</h2>
                <div className="menu-item">
                    <span className="menu-item-name">Брускета</span>
                    <span className="menu-item-description">Хрупкав препечен хляб, гарниран с домати, босилек и зехтин.</span>
                    <span className="menu-item-price">8 лв.</span>
                </div>
            </div>

        </div>

    );
}