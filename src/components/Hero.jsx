import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 lg:py-32">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Hi, I am a <span className="text-amber-500">Creative Developer</span>
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
        I build scalable web applications and elegant user interfaces matching
        the latest modern standards. Take a look at my work and my experience.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link
          to="/projects"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300"
        >
          View My Projects
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <Link
          to="/contact"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
