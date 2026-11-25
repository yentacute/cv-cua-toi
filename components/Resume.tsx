'use client';

import { useEffect, useState } from 'react';
import { experience, labels, languages, profile, skills, strengths, type Lang } from '@/data/cv';

const LANG_KEY = 'cv-lang';

const formatMonth = (value: string, lang: Lang) => {
  const [year, month] = value.split('-');
  return lang === 'vi' ? `${month}/${year}` : `${new Date(Number(year), Number(month) - 1).toLocaleString('en-US', { month: 'short' })} ${year}`;
};

const yearsSince = (start: string) => {
  const [year, month] = start.split('-').map(Number);
  const now = new Date();
  return Math.floor((now.getFullYear() * 12 + now.getMonth() - (year * 12 + month - 1)) / 12);
};

export const Resume = () => {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'vi') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const firstJob = experience[experience.length - 1];
  const totalYears = firstJob ? yearsSince(firstJob.start) : 0;

  return (
    <>
      <div className="toolbar no-print">
        <div className="lang-switch" role="group" aria-label="Language">
          {(['en', 'vi'] as const).map((code) => (
            <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button type="button" className="print-btn" onClick={() => window.print()}>
          {labels.print[lang]}
        </button>
      </div>

      <main className="page">
        <header className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{profile.title[lang]}</p>
            <p className="badge">
              <strong>{totalYears}+</strong> {labels.yearsExp[lang]}
            </p>
          </div>
          <ul className="contact" aria-label={labels.contact[lang]}>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            <li>{profile.location[lang]}</li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace('https://', '')}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace('https://www.', '')}</a></li>
          </ul>
        </header>

        <div className="grid">
          <div className="main-col">
            <section>
              <h2>{labels.summary[lang]}</h2>
              <p>{profile.summary[lang]}</p>
            </section>

            <section>
              <h2>{labels.experience[lang]}</h2>
              <ol className="timeline">
                {experience.map((job) => (
                  <li key={job.company + job.start} className="job">
                    <div className="job-head">
                      <h3>{job.role[lang]} · <span className="company">{job.company}</span></h3>
                      <span className="period">
                        {formatMonth(job.start, lang)} – {job.end ? formatMonth(job.end, lang) : labels.present[lang]}
                      </span>
                    </div>
                    <p className="job-summary">{job.summary[lang]}</p>
                    <ul className="bullets">
                      {job.highlights[lang].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <ul className="tags">
                      {job.stack.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="side-col">
            <section>
              <h2>{labels.skills[lang]}</h2>
              {skills.map((group) => (
                <div key={group.title.en} className="skill-group">
                  <h3>{group.title[lang]}</h3>
                  <ul className="tags">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2>{labels.strengths[lang]}</h2>
              <ul className="bullets">
                {strengths[lang].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2>{labels.languages[lang]}</h2>
              <ul className="plain">
                {languages.map((item) => (
                  <li key={item.name.en}>
                    <strong>{item.name[lang]}</strong>: {item.level[lang]}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
};
