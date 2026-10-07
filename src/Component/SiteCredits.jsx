import React from 'react';

const REMOTE = ['https://fabulousmedia.in/sitecredit/images', 'https://play.fabulousmedia.in/sitecredit/images'];

function CreditLogo({ href, file, name, imgClass = 'h-[10.5px]', onFail }) {
  const sources = [`/assets/sitecredit/${file}`, ...(file.endsWith('.svg') ? REMOTE.map((h) => `${h}/${file}`) : [])];
  const [i, setI] = React.useState(0);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="relative flex items-center justify-center w-[18px] h-[18px] bg-white rounded-[3px] opacity-80 hover:opacity-100 transition-all cursor-pointer after:absolute after:-inset-2.5 after:content-['']"
    >
      <img
        src={sources[i]}
        alt={name}
        className={`${imgClass} w-auto block pointer-events-none`}
        onError={() => (i < sources.length - 1 ? setI(i + 1) : onFail(file))}
      />
    </a>
  );
}

export default function SiteCredits() {
  const [failed, setFailed] = React.useState([]);
  const onFail = (file) => setFailed((f) => (f.includes(file) ? f : [...f, file]));
  const logos = [
    { href: 'https://fabulousmedia.in', file: 'fabulousmedia-icon.png', name: 'FabulousMedia', imgClass: 'h-[10.5px]' },
    { href: 'https://gocommercially.com', file: 'gocommercially.svg', name: 'GoCommercially', imgClass: 'h-[11.5px]' }
  ].filter((l) => !failed.includes(l.file));

  if (!logos.length) return null;

  return (
    <div className="flex items-center gap-[4px] px-[5px] py-[3px] border border-slate-300 rounded-[4px] bg-transparent">
      {logos.map((l, idx) => (
        <React.Fragment key={l.file}>
          {idx > 0 && <div className="w-[1px] h-[7px] bg-slate-300" />}
          <CreditLogo {...l} onFail={onFail} />
        </React.Fragment>
      ))}
    </div>
  );
}
