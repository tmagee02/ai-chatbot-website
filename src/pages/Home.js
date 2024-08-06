import '../styles/Home.css'
import heroImage from '../images/hero-background.png'
import PathConstants from '../routes/pathConstants.js'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main>
            {/* <!-- Hero Section --> */}
            <section class="hero">
                <h1>Welcome to CM MediGuide</h1>
                <p>
                    Your go-to source for health diagnostics, wellness tips, and
                    trusted resources.
                </p>
            </section>

            {/* <!-- Features Section --> */}
            <section class="features">
                <div class="feature">
                    <h2>Wellness Tips</h2>
                    <p>Discover practical advice for a healthier lifestyle.</p>
                    <Link
                        className="cta-button"
                        to={PathConstants.STAYINGHEALTHY}
                    >
                        Staying Healthy
                    </Link>
                </div>
                <div class="feature">
                    <h2>Resource Center</h2>
                    <p>Access a curated list of trusted health resources.</p>
                    <Link
                        className="cta-button"
                        to={PathConstants.RESOURCECENTER}
                    >
                        View Resources
                    </Link>
                </div>
                <div class="feature">
                    <h2>About Us</h2>
                    <p>Learn more about our mission and the team.</p>
                    <Link className="cta-button" to={PathConstants.ABOUT}>
                        Learn More
                    </Link>
                </div>
            </section>

            {/* <!-- Testimonials Section --> */}
            <section class="testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>
                    <p>
                        "The health chatbot is incredibly helpful and easy to
                        use!" - Alex J.
                    </p>
                </blockquote>
                <br />
                <blockquote>
                    <p>
                        "I found the wellness tips section very informative and
                        practical." - Jamie L.
                    </p>
                </blockquote>
            </section>

            {/* <!-- Recent Updates Section --> */}
            <section class="recent-updates">
                <h2>Recent Updates</h2>
                <article>
                    <h3>
                        <a href="#">5 Tips for a Healthier Diet</a>
                    </h3>
                    <p>
                        Check out our latest blog post on how to make healthier
                        food choices.
                    </p>
                </article>
                <article>
                    <h3>
                        <a href="#">How to Manage Stress Effectively</a>
                    </h3>
                    <p>Read about practical strategies to handle stress.</p>
                </article>
            </section>
        </main>
    )
}
