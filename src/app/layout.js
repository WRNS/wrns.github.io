import "@styles/globals.scss";

import Footer from "@components/Footer/footer";
import Header from "@components/Header/header";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import RocTheDay from "@components/Modal/ROC the Day/roc-the-day";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ReCaptchaProvider needs to be wrapped around the entire layout in order to load reCaptcha for the Contact Page */}
        {/* <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_PUBLIC_KEY}> */}
          <Header />
          <RocTheDay/>
          {children}
          <Footer />
        {/* </ReCaptchaProvider> */}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Winton Road Nursery School | WRNS",
  description: "Winton Road Nursery School (WRNS), located in Rochester, New York",
};
