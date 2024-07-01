import Consult from "@/components/consult/Consult";
import Banner from "@/screen/Banner";
import Design from "@/screen/Design";
import Footer from "@/screen/Footer";
import Works from "@/screen/Works";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Design />
      <Works />
      <Consult />
      <Footer />
    </main>
  );
}
