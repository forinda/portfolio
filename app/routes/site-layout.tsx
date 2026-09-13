import { Outlet } from "react-router";
import { BackToTop } from "~/components/back-to-top";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
