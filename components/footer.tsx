import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {currentYear} Kevin&apos;s Blog. All rights reserved.
                </p>
                <div className="footer-links">
                    <a
                        href="tel:+254731737063"
                        className="footer-icon-link"
                        aria-label="Phone"
                    >
                        <FaPhone size={20} />
                    </a>
                    <a
                        href="https://wa.me/254731737063"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                    <a
                        href="https://instagram.com/k.kikuvi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://twitter.com/kevinkikuvi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kevin-kikuvi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/KevinMacharia-667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
