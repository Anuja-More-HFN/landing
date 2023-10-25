import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PropTypes from "prop-types";

export const metadata = {
  title: {
    default: "Discover Heartfulness in Pune",
    template: "%s | Discover Heartfulness in Pune",
  },
  description: "Transforming Lives through Inner Peace",
  keywords: [
    "Transforming Lives through Inner Peace",
    "Heartfulness",
    "Discover Heartfulness in Pune",
    "Pune",
    "yoga",
    "meditation",
  ],
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: { apple: "/favicon.ico" },
  themeColor: "#fff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page_bg">
        <main>
          <NavBar />
          <div className="content">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
