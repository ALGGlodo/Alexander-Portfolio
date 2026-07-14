import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin } from "lucide-react";
import { CiLinkedin} from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import "./contact.css";

const SERVICE_ID = "service_vjjp80c";
const TEMPLATE_ID = "template_evuc1sm";
const PUBLIC_KEY = "u74IvmAFmJIgAjML-";

function Contact() {
    const [time, setTime] = useState("");
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const formatted = new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Manila"
            }).format(now);
            setTime(formatted);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000 * 30);
        return () => clearInterval(interval);
    }, []);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit =  (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: "New message from your portfolio",
            time: new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }),
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("Failed to send message. Please try again later.");
            });
       };

       return (
        <section className="contact-page" id="contact">
            <div className="contact-status">
                <span className="status-dot-live"></span>
                <span>AVAILABLE FOR PROJECTS</span>
            </div>

            <h2 className="contact-name">Alexander Glodo.</h2>
            <h3 className="contact-tagline">Let's build something that works.</h3>

            <div className="contact-bento">
                <div className="bento-card bento-location">
                    <div className="bento-location-top">
                        <span className="bento-icon-badge"><MapPin size={18} /></span>
                        <div className="bento-location-label">
                            <span>Location</span>
                            <p>Pampanga, Philippines</p>
                        </div>
                    </div>
                    <div className="bento-clock">
                        <span className="bento-clock-time">{time}</span>
                        <span className="bento-clock-zone">GMT+8</span>
                    </div>
                    <p className="bento-location-note">Building from wherever there's a signal.</p>
                </div>

                <a
                    href="https://github.com/ALGGlodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-card bento-social"
                    >
                    <SiGithub size={26} />
                    <span>GITHUB</span>
                </a>
                <a
                    href="https://linkedin.com/in/your-linkedin-here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-card bento-social"
                        >
                <CiLinkedin size={26} />
                <span>LINKEDIN</span>
             </a>

             <a href="#contact-form" className="bento-card bento-social">
                <Mail size={26} />
                <span>EMAIL</span>
                </a>
            </div>

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-now">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                </div>
                    <textarea
                        name="message"
                        placeholder = "What's on your mind?"
                        rows = "5"
                        value = {formData.message}
                        onChange = {handleChange}
                        required
                    ></textarea>

                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send message"}
                    </button>

                    {status === "sent" && <p className="form-status form-status-success">Message sent! I'll get back to you soon.</p>}
                    {status === "error" && <p className="form-status form-status-error">Something went wrong. Try again, or email me directly.</p>}
            </form>
        </section>
       );
}

export default Contact;

