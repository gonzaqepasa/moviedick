import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

function LayoutBorse({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

export default LayoutBorse;
