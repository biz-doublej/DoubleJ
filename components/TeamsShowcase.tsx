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

export default function TeamsShowcase({ teams, locale }: { teams: TeamInfo[]; locale: string }) {
  const [active, setActive] = useState(teams[0]?.key ?? '');
  const current = teams.find((t) => t.key === active) ?? teams[0];

  const ko = locale === 'ko';
  const zh = locale === 'zh';
  const labels = ko
    ? { title: '주요 팀', mission: '미션', focus: '핵심 업무', tech: 'Tech & Systems' }
    : zh
    ? { title: '核心团队', mission: '使命', focus: '核心工作', tech: '技术与系统' }
    : { title: 'Key Teams', mission: 'Mission', focus: 'Focus', tech: 'Tech & Systems' };

  return (
    <section>
      <div className="container">
        <h2>{labels.title}</h2>
        <div className="tabs" role="tablist" aria-label={labels.title}>
          {teams.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={t.key === active}
              id={`tab-${t.key}`}
              aria-controls={`panel-${t.key}`}
              className={`tab${t.key === active ? ' active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              <span className="team-mark" aria-hidden>◎</span>
              {t.name}
            </button>
          ))}
        </div>

        {current && (
          <div id={`panel-${current.key}`} role="tabpanel" aria-labelledby={`tab-${current.key}`} className="team-panel glass">
            <div className="team-panel-split">
              <div>
                <h4 className="panel-title">{labels.mission}</h4>
                <p style={{ marginTop: 6 }}>{current.description}</p>
                <h4 className="panel-title" style={{ marginTop: 12 }}>{labels.focus}</h4>
                <div className="chips">
                  {current.services.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="panel-title">{labels.tech}</h4>
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
    </section>
  );
}

