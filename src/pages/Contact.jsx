export default function Contact() {
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Contact Me
      </h2>
      <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
