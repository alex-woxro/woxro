import Consult from "@/components/consult/Consult";
import Banner from "@/screen/Banner";
import Design from "@/screen/Design";
import Dummy from "@/screen/Dummy";
import Dummy2 from "@/screen/Dummy2";
import Footer from "@/screen/Footer";
import Works from "@/screen/Works";

export default function Home() {
  return (
    <main>
      <Banner />
      <Design />
      <Works />
      <Consult />
      <Footer />

      {/* <Dummy /> */}
      {/* <Dummy2 /> */}
    </main>
  );
}
