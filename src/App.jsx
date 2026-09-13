import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="stage">
      <div className="atmosphere">
        <div className="halo">
          <img
            className="heroMark"
            src="/delos-mark.png"
            alt="The sun rising behind the island of Delos, reflected on the water"
          />
        </div>
      </div>

      <div className="content">
        <div className="mark">
          <img src="/delos-badge.png" alt="Delos app icon" />
          <span>Delos</span>
        </div>

        <span className="eyebrow">In development</span>

        <h1>
          A calmer way
          <br />
          to <em>wander</em>.
        </h1>

        <p className="lede">
          Delos suggests quiet, walkable routes nearby — tagged by mood, not mileage —
          then gets out of the way once you're moving. Built for iOS, one soft-launch
          step at a time.
        </p>

        {status === 'sent' ? (
          <p className="confirmation">You're on the list — we'll email you when Delos launches.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@domain.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'sending'}
            />
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Notify me'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="note error">Something went wrong — please try again in a moment.</p>
        )}
        {status !== 'sent' && status !== 'error' && (
          <p className="note">No spam. One email, when it's ready.</p>
        )}
      </div>

      <footer>© 2026 Delos — built slowly, on purpose.</footer>
    </div>
  );
}

export default App;
