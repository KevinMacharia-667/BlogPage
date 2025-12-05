export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {currentYear} My Blog. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}
