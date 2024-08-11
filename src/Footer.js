import './css/footer.css'
const Footer = () => {
    return ( 
        <footer className='footer'>
            <div id="about_us" class="about_us">
                <h3>About Us</h3>
                <p>Synchronous Emergency Services</p>
                <ul class="socials">
                    <li><a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>copyright &copy;2022 Synchronous Emergency Services</p>
            </div>
        </footer> 
     );
}
 
export default Footer;