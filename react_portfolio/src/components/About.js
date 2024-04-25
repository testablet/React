import React from 'react';
import '../styles/About.css';
import { useTranslation } from "./LanguageToggle";
import { useTheme } from "./ThemeToggle";

const About = () => {
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].about;

    return (
        <div className={`about-container ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
            <section className="section">
                <h2 className="section-title">{t.descriptionTitle}</h2>
                <p className="section-content">{t.description}</p>
            </section>

            <section className="section skills-section">
                <h2 className="section-title">{t.skillsTitle}</h2>
                <div className="skills-table">
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t.skills[1]}</h3>
                        <ul className="skill-list">
                            <li className="skill-item">{t.skills[2]}</li>
                            <li className="skill-item">{t.skills[3]}</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t.skills[4]}</h3>
                        <ul className="skill-list">
                            <li className="skill-item">{t.skills[5]}</li>
                            <li className="skill-item">{t.skills[6]}</li>
                            <li className="skill-item">{t.skills[7]}</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3 className="skill-category-title">{t.skills[8]}</h3>
                        <ul className="skill-list">
                            <li className="skill-item">{t.skills[9]}</li>
                            <li className="skill-item">{t.skills[10]}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section experiences-section">
                <h2 className="section-title">{t.experiencesTitle}</h2>
                <div className="experiences-container">
                    {t.experiences && t.experiences.map((experience, index) => (
                        <div key={index} className="experience-card">
                            <h3 className="experience-title">{experience.title}</h3>
                            <p className="experience-description">{experience.company}</p>
                            <p className="experience-date">{experience.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section diplomes-section">
                <h2 className="section-title">{t.diplomesTitle}</h2>
                <div className="diplomes-container">
                    {t.diplomes && t.diplomes.map((diplome, index) => (
                        <div key={index}
                             className={`diplome-card ${index === 1 && t.diplomes.length % 2 !== 0 ? 'centered' : ''}`}>
                            <h3 className="diplome-title">{diplome.title}</h3>
                            <p className="diplome-description">{diplome.university}</p>
                            <p className="diplome-date">{diplome.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
