/*∷YAY⟨C-b21b-18⟩
  unit: App
  lang: jsx
  in: props: {}
  out: main element
  renders: yes
  pure: yes
  ensures: find(out, "header") !== null && find(out, "section") !== null && hasClass(find(out, "section"), "gallery")
  feeds: C-b21b-15
  feeds: C-b21b-17
  intent: Renders the Kaijsas Gallery app — Header at the top, Gallery of flip-cards below. Light mode only, no toggle.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-18⟩*/
import { Header } from './components/Header.jsx';
import { Gallery } from './components/Gallery.jsx';

export function App() {
  return (
    <main className="app">
      <Header title="Kaijsas Gallery" subtitle="Turkey 2026 — åtta stopp" />
      <p className="app__intro">
        Klicka på ett kort för att se vad bilden visar. Tryck igen för att vända tillbaka.
      </p>
      <Gallery />
      <footer className="app__footer">
        <small>Bilder från Unsplash. Beskrivningar från resan.</small>
      </footer>
    </main>
  );
}
