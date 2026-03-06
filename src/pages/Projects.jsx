export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow mx-auto w-full"
          >
            <a href="#">
              <img
                className="rounded-t-lg bg-gray-200 h-48 w-full object-cover"
                src={`https://placehold.co/600x400/eeeeee/999999?text=Project+${item}`}
                alt="Project thumbnail"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Project Title {item}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Here's a brief description about the project and the main
                technologies used building it.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
