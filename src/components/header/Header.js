import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="navBar">
                <li className="logo">Makers Documentation</li>
                <div className="navBarLeft">
                    <li>Главная</li>
                    <li>Блог</li>
                    <li>Git Hub</li>
                    <input
                        className="header-inp"
                        placeholder="Поиск"
                        type="text"
                    />
                </div>
            </div>
            <div className="img">
                <img
                    src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/53816/0923-AgileDocumentation-Luke_Social-eddbe33bf1265981834c31cad8efc2a2.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;
