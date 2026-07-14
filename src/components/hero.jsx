import QRCode from "react-qr-code";
import "./hero.css";

const PROFILE_URL = "https://github.com/ALGGlodo";

export default function Hero() {
    return(
        <section className="hero" id="home">
            <div className="hero-top">
                <span className="hero-tag">Front-End Developer</span>
                <span className="hero-tag">Aspiring UI/UX Designer</span>
                <span className="hero-tag">Since 2026</span>
            </div>

            <div className="hero-main">
                <h1 className="hero-title">
                    Alexander
                </h1>

            <div className="hero-name-line">
                    <h1 className="hero-title hero-lastname">
                        Glodo
                    </h1>

                    <p className="hero-subhead">
                        Front-end developer building practical,
                        real-world tools
                    </p>
                </div>

        <div className="hero-qr">
            <QRCode
            value={`https://github.com/ALGGlodo`}
            size={96}
            bgColor="#0d0d0d"
            fgColor="#4e9b6b"
          />
          <span className="hero-qr-label">scan → github</span>
        </div>
    </div>
</section>
    );
}



