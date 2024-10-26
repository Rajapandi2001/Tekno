// src/app/layout.js
import Header from "./Header/Header";
import Footer from "../components/Footer";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header/>
        <main>
          {children} {/* This will render the content of each page */}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
