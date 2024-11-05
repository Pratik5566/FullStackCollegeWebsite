import React from 'react';

function Facilities() {
    return (
        <section className="facilities">
            <h1>Our Facilities</h1>
            <div className="row">
                <div className="facilities-col">
                    <img src="images/library.png" alt="Library" />
                    <h3>World Class Library</h3>
                    <p>Over 10000 books across a wide range of genres</p>
                </div>
                <div className="facilities-col">
                    <img src="images/basketball.png" alt="Play Ground" />
                    <h3>Play Ground</h3>
                    <p>Over 20+ sport facilities</p>
                </div>
                <div className="facilities-col">
                    <img src="images/cafeteria.png" alt="Cafeteria" />
                    <h3>Tasty And Healthy Food</h3>
                    <p>Over 5+ mess halls to serve 1000+ students at once</p>
                </div>
            </div>
        </section>
    );
}

export default Facilities;