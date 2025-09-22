'use client';

import { useState } from 'react';

export type TeamInfo = {
  key: string;
  name: string;
  summary: string;
  description: string;
  services: string[];
  backends: string[];
};

export default function Teams({ teams, title }: { teams: TeamInfo[]; title: string }) {
  const [active, setActive] = useState(teams[0]?.key ?? '');
  const current = teams.find((t) => t.key === active) ?? teams[0];

  return (
    <div>
      <h3 style={{ marginTop: 18 }}>{title}</h3>

      <div className="cards" role="tablist" aria-label={title} style={{ marginTop: 8 }}>
        {teams.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`team-panel-${t.key}`}
              id={`team-tab-${t.key}`}
              className={`card team-card${isActive ? ' active' : ''}`}
              onClick={() => setActive(t.key)}
              style={{ textAlign: 'left', cursor: 'pointer' }}
            >
              <h3 style={{ marginBottom: 4 }}>{t.name}</h3>
              <p className="muted" style={{ margin: 0 }}>{t.summary}</p>
            </button>
          );
        })}
      </div>

      {current && (
        <div
          id={`team-panel-${current.key}`}
          role="tabpanel"
          aria-labelledby={`team-tab-${current.key}`}
          className="team-panel"
        >
          <div className="panel-header">
            <h3 style={{ margin: 0 }}>{current.name}</h3>
            <span className="badge">{current.summary}</span>
          </div>
          <p style={{ marginTop: 8 }}>{current.description}</p>

          <div className="panel-grid">
            <div>
              <h4 className="panel-title">Services</h4>
              <div className="chips">
                {current.services.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="panel-title">Backends</h4>
              <div className="chips">
                {current.backends.map((b) => (
                  <span key={b} className="chip">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
