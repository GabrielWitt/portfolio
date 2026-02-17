import './Impact.css';
import { useLanguage } from '../../context/LanguageContext';

const Impact = () => {
  const { t } = useLanguage();

  return (
    <section id="impact" className="impact-section">
      <div className="impact-container">
        <h2 className="impact-title">{t.impact.title}</h2>

        <div className="impact-grid">
          {t.impact.highlights.map((item, index) => {
            const numberMatch = item.match(/\d+%?|\d,\d+\+?|\d+\+?/);
            const number = numberMatch ? numberMatch[0] : null;
            const text = number ? item.replace(number, '').trim() : item;

            return (
              <div key={index} className="impact-card">
                {number && <div className="impact-number">{number}</div>}
                <p className="impact-text">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
