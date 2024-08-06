import React from 'react'
import '../styles/StayingHealthy.css'
import hydration from '../images/hydration.jpg'
import exercise from '../images/exercise.jpg'
import balanceddiet from '../images/balanced-diet.jpg'
import mentalhealth from '../images/mental-health.jpg'
import sleep from '../images/sleep.jpg'
import sunsafety from '../images/sun-safety.jpg'

export default function StayingHealthy() {
    return (
        <div>
            <section id="health-facts">
                <h1>Staying Healthy</h1>
                <p>
                    Learn a few simple ways to maintain a healthy lifestyle and
                    boost your well-being.
                </p>

                <div class="fact">
                    <h2>Tip 1: The Importance of Hydration</h2>
                    <p>
                        Drinking enough water daily is crucial for many bodily
                        functions, including temperature regulation, joint
                        lubrication, and nutrient transportation.
                    </p>
                    <img src={hydration} alt="Glass of Water" />
                </div>

                <div class="fact">
                    <h2>Tip 2: Benefits of Regular Exercise</h2>
                    <p>
                        Regular physical activity can improve your muscle
                        strength, boost your endurance, and reduce your risk of
                        chronic diseases like heart disease and diabetes.
                    </p>
                    <img src={exercise} alt="People Exercising" />
                </div>

                <div class="fact">
                    <h2>Tip 3: The Power of a Balanced Diet</h2>
                    <p>
                        A balanced diet provides the nutrients your body needs
                        to function effectively. Eating a variety of foods
                        ensures you get a wide range of nutrients.
                    </p>
                    <img src={balanceddiet} alt="Healthy Food" />
                </div>

                <div class="fact">
                    <h2>Tip 4: Mental Health Matters</h2>
                    <p>
                        Mental health is just as important as physical health.
                        Taking care of your mental well-being is essential for a
                        healthy and fulfilling life.
                    </p>
                    <img src={mentalhealth} alt="Mental Health" />
                </div>

                <div class="fact">
                    <h2>Tip 5: Importance of Sleep</h2>
                    <p>
                        Good sleep is vital for overall health. It helps the
                        body repair and regenerate, boosts the immune system,
                        and improves cognitive function.
                    </p>
                    <img src={sleep} alt="Sleeping Person" />
                </div>

                <div class="fact">
                    <h2>Tip 6: Sun Safety</h2>
                    <p>
                        Excessive sun exposure can lead to skin damage and
                        increase the risk of skin cancer. It's important to use
                        sunscreen and wear protective clothing.
                    </p>
                    <img src={sunsafety} alt="Person Applying Sunscreen" />
                </div>
            </section>
        </div>
    )
}
