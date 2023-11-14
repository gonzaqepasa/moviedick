import Footer from "@/components/Footer/Footer";
import NewNav from "@/components/Navbar/NewNav";

function LayoutWatch({ children }: { children: React.ReactNode }) {
  return (
    <main>
   
      <NewNav />
      {children}
      <Footer />
    </main>
  );
}

export default LayoutWatch;
