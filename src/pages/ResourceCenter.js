import '../styles/ResourceCenter.css'

export default function ResourceCenter() {
    return (
        <section id="resource-center">
            <h1>Resource Center</h1>
            <p>
                Explore our collection of trusted resources to help you stay
                informed and healthy.
            </p>

            {/* <!-- Medical Websites Section --> */}
            <section id="medical-websites">
                <h2>Medical Websites</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.webmd.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WebMD
                        </a>{' '}
                        - Trusted medical information and resources.
                    </li>
                    <li>
                        <a
                            href="https://www.mayoclinic.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mayo Clinic
                        </a>{' '}
                        - Comprehensive medical guides and information.
                    </li>
                    <li>
                        <a
                            href="https://www.nih.gov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            National Institutes of Health (NIH)
                        </a>{' '}
                        - Authoritative medical research and health information.
                    </li>
                </ul>
            </section>

            {/* <!-- Downloadable Documents Section --> */}
            <section id="downloadable-documents">
                <h2>Downloadable Documents</h2>
                <ul>
                    <li>
                        <a href="docs/healthy-eating-guide.pdf" download>
                            Healthy Eating Guide
                        </a>{' '}
                        - A comprehensive guide to nutrition and balanced diets.
                    </li>
                    <li>
                        <a href="docs/first-aid-checklist.pdf" download>
                            First Aid Checklist
                        </a>{' '}
                        - Essential items and steps for emergency situations.
                    </li>
                    <li>
                        <a href="docs/stress-management-tips.pdf" download>
                            Stress Management Tips
                        </a>{' '}
                        - Practical tips for managing stress in daily life.
                    </li>
                </ul>
            </section>

            {/* <!-- Recommended Reading Section --> */}
            <section id="recommended-reading">
                <h2>Recommended Reading</h2>
                <ul>
                    <li>
                        <strong>
                            <em>The Body Keeps the Score</em>
                        </strong>{' '}
                        by Bessel van der Kolk - Insights into how trauma
                        affects the body and mind.
                    </li>
                    <li>
                        <strong>
                            <em>How Not to Die</em>
                        </strong>{' '}
                        by Michael Greger - A guide to preventing and reversing
                        disease through diet.
                    </li>
                    <li>
                        <strong>
                            <em>The Blue Zones</em>
                        </strong>{' '}
                        by Dan Buettner - Lessons from the world's longest-lived
                        people.
                    </li>
                </ul>
            </section>
        </section>
    )
}
