import "../styles/globals.css";

export const metadata = {
  title: "CrystalLynne LLC",
  description:
    "Contact CrystaLynne LLC today to schedule your consultation and begin the transformation of your business.",
  publisher: "Neam Technologies",
};

// fonts
import { Sora } from "next/font/google";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sora`}>{children}</body>
    </html>
  );
}
