/*∷YAY⟨C-b21b-4⟩
  unit: FlipCard
  lang: jsx
  in: props: { imageUrl: string, title: string, description: string, alt: string }
  out: article element
  renders: yes
  pure: yes
  ensures: find(out, "img") !== null && attr(find(out, "img"), "src") === props.imageUrl && attr(find(out, "img"), "alt") === props.alt && text(out).includes(props.title) && text(out).includes(props.description) && find(out, "button") !== null && hasClass(find(out, "button"), "flip-card__reveal")
  intent: Renders a single photo card whose front shows the image and whose back reveals the description. The reveal button toggles a flipped state.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-4⟩*/
import { useState } from 'react';

export function FlipCard({ imageUrl, title, description, alt }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <article
      className={`flip-card${flipped ? ' flip-card--flipped' : ''}`}
      data-testid="flip-card"
      data-flipped={flipped ? 'true' : 'false'}
    >
      <div className="flip-card__inner">
        <div className="flip-card__face flip-card__face--front">
          <img className="flip-card__image" src={imageUrl} alt={alt} loading="lazy" />
          <div className="flip-card__caption">
            <h2 className="flip-card__title">{title}</h2>
          </div>
        </div>
        <div className="flip-card__face flip-card__face--back">
          <p className="flip-card__description">{description}</p>
        </div>
      </div>
      <button
        type="button"
        className="flip-card__reveal"
        onClick={() => setFlipped((p) => !p)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setFlipped((p) => !p);
          }
        }}
        aria-pressed={flipped}
        aria-label={flipped ? 'Dölj beskrivning' : 'Visa beskrivning'}
      >
        {flipped ? '↺ Tillbaka' : '? Vad visar bilden?'}
      </button>
    </article>
  );
}
