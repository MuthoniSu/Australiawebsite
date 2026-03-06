import "./Footer.css"; // make sure your CSS file is in the same folder

export default function Footer() {
    return (
        <footer className="footer">

            {/* Top Authority Strip */}
            <div className="footer-authority">
                <span className="flag">�🇺</span>
                Official Australia Immigration Portal
                <span className="flag">🇦🇺</span>
            </div>

            <div className="footer-inner">

                {/* About Section */}
                <div className="footer-section footer-about">
                    <h4>Australia Immigration Portal</h4>
                    <p>
                        This official portal facilitates transparent and secure
                        recruitment of professionals for verified employment
                        opportunities in Australia.
                    </p>

                    <div className="footer-logos">
                        <div className="gov-logo">
                            <img 
                                src="/australia-flag.png" 
                                alt="Australia Flag" 
                                className="footer-flag-image"
                            />
                            <span className="gov-name">Australia</span>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/jobdetail">Verified Job Listings</a></li>
                        <li><a href="/jobdetail">Application Process</a></li>
                        <li><a >Eligibility Requirements</a></li>
                        <li><a >Frequently Asked Questions</a></li>
                    </ul>
                </div>

                {/* Legal & Compliance */}
                <div className="footer-section">
                    <h4>Legal & Compliance</h4>
                    <ul>
                        <li><a >Privacy Policy</a></li>
                        <li><a >Terms of Service</a></li>
                        <li><a >Data Protection (GDPR)</a></li>
                        <li><a >Report Misconduct</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section footer-contact">
                    <h4>Official Contact</h4>
                    <p><strong>Email:</strong> info@australiaimmigration.com</p>
                    <p><strong>Phone:</strong> +61 2 XXXX XXXX</p>
                    <p><strong>Office:</strong> Australia</p>

                    <div className="footer-ecitizen">
                        <p>Verified via Official Government Channels</p>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>© 2026 Australia Immigration Portal. All Rights Reserved.</p>
                <p>
                    This platform is dedicated to facilitating employment opportunities for qualified professionals.
                </p>
            </div>

        </footer>
    );
}
