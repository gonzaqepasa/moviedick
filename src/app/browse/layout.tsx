import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewNav from "@/components/Navbar/NewNav";

function LayoutBorse({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* <Navbar /> */}
      <NewNav />
      {children}
      <Footer />
    </section>
  );
}

export default LayoutBorse;
