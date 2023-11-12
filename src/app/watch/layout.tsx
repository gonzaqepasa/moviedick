import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewNav from "@/components/Navbar/NewNav";

function LayoutWatch({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <Navbar /> */}
      <NewNav />
      {children}
      <Footer />
    </main>
  );
}

export default LayoutWatch;
