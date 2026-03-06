import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="flex-grow pt-20 pb-10 px-4 max-w-screen-xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
