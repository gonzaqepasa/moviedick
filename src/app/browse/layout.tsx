import Footer from "@/components/Footer/Footer";
import NewNav from "@/components/Navbar/NewNav";

function LayoutBorse({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <NewNav />
      {children}
      <Footer />
    </section>
  );
}

export default LayoutBorse;
