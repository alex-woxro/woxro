import Consult from "@/components/consult/Consult";
import Banner from "@/screen/Banner";
import Design from "@/screen/Design";
import Dummy from "@/screen/Dummy";
import Footer from "@/screen/Footer";
import Works from "@/screen/Works";

export default function Home() {
  return (
    <main>
      {/* <Dummy /> */}
      <Banner />
      <Design />
      <Works />
      <Consult />
      <Footer />
    </main>
  );
}
