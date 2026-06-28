import { mailtoHref, whatsappHref, githubHref } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-2 text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-line pt-8 text-[13px] sm:flex-row">
        <span className="font-semibold text-plum">Bar Moshe · AI-native builder</span>
        <span className="flex items-center gap-5">
          <a href={mailtoHref} className="transition hover:text-plum">Email</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-plum">WhatsApp</a>
          <a href="/Bar_Moshe_Resume.pdf" download target="_blank" rel="noopener" className="transition hover:text-plum">Download CV</a>
          <a href={githubHref} target="_blank" rel="noreferrer" className="transition hover:text-plum">GitHub</a>
        </span>
        <span>Made for Novella. Not affiliated.</span>
      </div>
    </footer>
  );
}
