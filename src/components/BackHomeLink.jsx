export default function BackHomeLink() {
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2 text-sm font-bold text-white/64 transition hover:text-white"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/16 bg-white/8 transition group-hover:-translate-x-0.5 group-hover:bg-white/14">
        <span aria-hidden="true">←</span>
      </span>
      Back to home
    </a>
  );
}
