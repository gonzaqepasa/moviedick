import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

function LayoutWatch({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default LayoutWatch;
