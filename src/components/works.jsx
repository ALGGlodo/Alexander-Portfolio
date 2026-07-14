import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import "./works.css";
import rpsCover from "../assets/rps.png";
import Laudare from "../assets/Laudare.png";
import AriskinCare from "../assets/Ariskin.png"; 
import Aura from "../assets/auraclean.png";
import TravelCation from "../assets/TravelCation.png";
import DeliverAir from "../assets/DeliverAir.png";
import shiksResto from "../assets/shiks_restobar.png";
import ServeXCourier from "../assets/ServeX Courier Side.png";
import ServeXCustomer from "../assets/ServeX Customer Side.png";
import DevTech from "../assets/DevTech.png";
import AUII from "../assets/AUII_Figma.png";
import TeaCafe from "../assets/I-Tea Cafe.png";
import { ChevronRight } from "lucide-react";


function Works() {

    const projects = [
           {
            title: "ServeX - Customer Side",
            image: ServeXCustomer,
            url: "https://algglodo.github.io/ServeX-Customer/",
            description: "A customer-facing web application prototype created as part of the ServeX capstone project. It demonstrates the interface and core workflows designed for end users, including placing orders and tracking delivery status.",
            languages: ["Javascript (VanillaJS)", "Firebase", "CSS", "HTML"],
            aiTools: ["Claude API"],
            status: "Shipped",
        },
        {
            title: "ServeX - Courier Side",
            image: ServeXCourier,
            url: "https://algglodo.github.io/ServeX-Courier/",
            description: "A courier-facing web application prototype created as part of the ServeX capstone project. It demonstrates the interface and core workflows designed for delivery personnel, including managing deliveries and updating order statuses.",
            languages: ["Javascript (VanillaJS)", "Firebase", "CSS", "HTML"],
            aiTools: ["Claude API"],
            status: "Shipped",
        },
        {
            title: "RSPS Parking System",
            image: rpsCover,
            url: "https://algglodo.github.io/RPS-Parking-Website",
            description: "Firebase-backed tracker for live parking availability of our parking lot business. Built with React, CSS, and Firebase.",
            languages: ["Javascript (VanillaJS)", "Firebase", "CSS", "HTML"],
            aiTools: ["Claude API"],
            status: "Shipped",
        },
        {
            title: "Laudare",
            image: Laudare,
            url: "https://algglodo.github.io/Laudare/",
            description: "Laudare is a website built for making a to-do list and tracking tasks. It was made using React and Vite. It's task is to help students and professionals to manage their tasks and to-do lists effectively.",
            languages: ["react", "vite"],
            aiTools: ["Claude API"],
            status: "Shipped",
        },
           {
            title: "Ariskin",
            image: AriskinCare, 
            url: "https://algglodo.github.io/ARISKIN/",
            description: "Ariskin is a mockup brand website for a fictional skincare brand.	It was built as a multi-page e-commerce site (store, cart, order status) from scratch using HTML5, CSS3, and vanilla JavaScript ",
            languages: ["HTML", "CSS", "JavaScript (VanillaJS)"],
            aiTools: ["Claude API", "ChatGPT", "Freepik"],
            status: "Shipped",
           },
           {
            title: "AuraCLEAN Landing Page",
            image: Aura,
            url: "https://algglodo.github.io/AuraCLEAN/",
            description: "AuraCLEAN is a mockup landing page for a fictional toothbrush brand. It was built as a single-page website from scratch using HTML5, CSS3, and vanilla JavaScript. ",
            languages: ["HTML", "CSS", "JavaScript (VanillaJS)"],
            aiTools: ["ChatGPT", "Freepik"],
            status: "Shipped",
           },
           {
            title: "TravelCation",
            image: TravelCation,
            url: "https://algglodo.github.io/TravelCation/",
            description: "TravelCation is a mockup landing page for a fictional travel agency. It provides information about various hotels, cabins, and other accommodations. It was built as a single-page website from scratch using HTML5, CSS3, and vanilla JavaScript.",
            languages: ["HTML", "CSS", "JavaScript (VanillaJS)"],
            aiTools: ["ChatGPT", "Freepik"],
            status: "Shipped",
           },
          {
            title: "Shiks Restobar Website",
            image: shiksResto,
            url: "https://algglodo.github.io/restobar/",
            description: "A multi-page restaurant website built during a college course, following along with instructor-led tutorials. Covered structuring a full site across multiple pages: home, menu, about, and contact with consistent HTML and CSS layout throughout",
            languages: ["HTML", "CSS"],
            aiTools: [],
            status: "Shipped",
          },
          {
            title: "DeliverAir",
            image: DeliverAir,
            url: "https://algglodo.github.io/DeliverAir/",
            description: "A concept website for a drone delivery service — swift, traffic-free delivery, built around modernizing how products reach people. Includes a promotional video produced with VEED AI.",
            languages: ["HTML", "CSS", "JavaScript", "BOOTSTRAP"],
            aiTools: ["VEED AI", "ChatGPT"],
            status: "Shipped",
          },
           {
            title: "DevTech",
            image: DevTech,
            url: null,
            figmaUrl: "https://www.figma.com/proto/xhiYu1kZdqLG30OAI9G6r7/Devtech?node-id=37-10&starting-point-node-id=37%3A10&t=ZEVag0mQB3mAaJmk-1",
            description: "A project built for a major subject in our course, starting from a pre-built template and modified to meet the assignment requirements, adjusted layout, content, and styling to fit the project brief.",
            languages: ["None (Figma Prototype)"],
            aiTools: [],
            status: "Shipped",
          },
           {
            title: "Asia United Insurance Inc. (AUII) Front-End Interface Prototype",
            image: AUII,
            url: null,
            figmaUrl: "https://www.figma.com/proto/m42bqbAf7oXzmX0H5wF6jZ/AUII?node-id=38-159&t=B3HOVEL77BspnPWA-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A159",
            description: "Built during my internship at Asia United Insurance — a front-end interface for our company's main website.",
            languages: ["None (Figma Prototype)"],
            aiTools: [],
            status: "Shipped",
          },
           {
            title: "I-Tea Cafe",
            image: TeaCafe,
            url: null,
            figmaUrl: "https://www.figma.com/design/9aYXBRQ2QWirJ3SSvIb3Yb/I-TEA-CAFE?node-id=0-1&t=MHUbnDRtX5WMzNdr-1",
            description: "A modern cafe interface design created in Figma, showcasing a clean and user-friendly layout for a fictional cafe business.",
            languages: ["None (Figma Prototype)"],
            aiTools: [],
            status: "Shipped",
          },

    ];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

     useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

   return (
        <section className="works" id="works">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, index) => (
                        <div
                            className={`embla__slide ${index === selectedIndex ? "is-active" : ""}`}
                            key={index}
                        >
                            <div className="slide-content">
                                <div className="slide-image">
                                    <img src={project.image} alt={project.title} />
                                </div>



                                <div className="slide-text">
                                    <div className="slide-meta">
                                        <span className="slide-index">
                                            {String(index + 1).padStart(3, "0")}
                                        </span>
                                        <span className="status-dot"></span>
                                        <span className="slide-status">{project.status}</span>
                                    </div>

                                    <h3 className="slide-title">{project.title}</h3>
                                    <p className="slide-description">{project.description}</p>

                                    <p className="tag-label">languages</p>
                                    <div className="tag-row">
                                        {project.languages.map((lang, i) => (
                                            <span className="tag" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                                                {lang}
                                            </span>
                                        ))}
                                    </div>

                                    {project.aiTools.length > 0 && (
                                        <>
                                            <p className="tag-label">ai tools</p>
                                            <div className="tag-row">
                                                {project.aiTools.map((tool, i) => (
                                                    <span className="tag tag-ai" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="slide-link">
                                            View project <ChevronRight size={16} />
                                        </a>
                                    )}

                                    {project.figmaUrl && (
                                        <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="slide-link slide-link-figma">
                                            View design <ChevronRight size={16} />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla-controls">
                <button className="embla-btn" onClick={() => emblaApi && emblaApi.scrollPrev()} aria-label="Previous project">
                    ←
                </button>

                <div className="embla-dots">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`embla-dot ${index === selectedIndex ? "is-selected" : ""}`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to project ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <button className="embla-btn" onClick={() => emblaApi && emblaApi.scrollNext()} aria-label="Next project">
                    →
                </button>
            </div>
        </section>
    );
}

export default Works;