import React from "react";
import "./footer.css";
//import Logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="disclaimer-area">
                    <p className="disclaimer-desc">
                        <b>Disclaimer:</b> This Amazon clone project is a mere simulation
                        and is not affiliated with Amazon in any way.
                    </p>
                </div>
            </div>
            <div className="extra-data">
                <div className="link-section">
                    <div className="first-row">
                        <Link to="/home" ><p className="bold">Get to Know Us</p></Link>
                        <Link to="/home" ><p>Make Money with Us</p></Link>
                        <Link to="/home" ><p>Amazon Payment</p></Link>
                        <Link to="/home" ><p>Let Us Help You</p></Link>
                    </div>
                    <div className="second-row">
                        <Link to="/home" ><p className="bold">About Amazon</p></Link>
                        <Link to="/home" ><p>Sell products on Amazon</p></Link>
                        <Link to="/home" ><p>Amazon Business Card</p></Link>
                        <Link to="/home" ><p>Amazon and COVID-19</p></Link>
                    </div>
                    <div className="third-row">
                        <Link to="/home" ><p className="bold">Connect with Us</p></Link>
                        <Link to="/home" ><p>Sell apps on Amazon</p></Link>
                        <Link to="/home" ><p>Shop with Points</p></Link>
                        <Link to="/home" ><p>Shipping Rates & Policies</p></Link>
                    </div>
                    <div className="fourth-row">
                        <Link to="/home" ><p className="bold">Amazon Cares</p></Link>
                        <Link to="/home" ><p>Become an Affiliate</p></Link>
                        <Link to="/home" ><p>Reload Your Balance</p></Link>
                        <Link to="/home" ><p>Returns & Replacements</p></Link>
                    </div>
                </div>
                <div className="link-section2">
                    <div className="first-one">
                        <div className="first-row">
                            <Link to="/home" ><p className="bold">Get to Know Us</p></Link>
                            <Link to="/home" ><p>Make Money with Us</p></Link>
                            <Link to="/home" ><p>Amazon Payment</p></Link>
                            <Link to="/home" ><p>Let Us Help You</p></Link>
                        </div>
                        <div className="second-row">
                            <Link to="/home" ><p className="bold">About Amazon</p></Link>
                            <Link to="/home" ><p>Sell products on Amazon</p></Link>
                            <Link to="/home" ><p>Amazon Business Card</p></Link>
                            <Link to="/home" ><p>Amazon and COVID-19</p></Link>
                        </div>
                    </div>
                    <div className="second-one">
                        <div className="third-row">
                            <Link to="/home" ><p className="bold">Connect with Us</p></Link>
                            <Link to="/home" ><p>Sell apps on Amazon</p></Link>
                            <Link to="/home" ><p>Shop with Points</p></Link>
                            <Link to="/home" ><p>Shipping Rates & Policies</p></Link>
                        </div>
                        <div className="fourth-row">
                            <Link to="/home" ><p className="bold">Amazon Cares</p></Link>
                            <Link to="/home" ><p>Become an Affiliate</p></Link>
                            <Link to="/home" ><p>Reload Your Balance</p></Link>
                            <Link to="/home" ><p>Returns & Replacements</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
