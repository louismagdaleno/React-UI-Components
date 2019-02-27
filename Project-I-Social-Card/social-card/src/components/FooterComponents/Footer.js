// required
import React from 'react';

// styles
import './Footer.css';

// compose Footer
const Footer = () => {
    return (
        <footer>
            <ul>
                <li><i class="far fa-comment"></i></li>
                <li><i class="fas fa-sync-alt"></i>6</li>
                <li><i class="far fa-heart"></i>4</li>
                <li><i class="far fa-envelope"></i></li>
            </ul>
        </footer>
    );
}

// export footer
export default Footer;