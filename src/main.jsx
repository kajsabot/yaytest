/*∷YAY⟨C-b21b-8⟩
  unit: mountApp
  lang: js
  in: {}
  out: undefined
  pure: no
  effects: dom
  ensures: true
  intent: Mounts the React App to #root. One-shot bootstrap.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-8⟩*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './styles.css';

export function mountApp() {
  const container = document.getElementById('root');
  if (!container) return;
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
