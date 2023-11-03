import Navbar from "@/components/Navbar/Navbar";

function LayoutBorse({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}

export default LayoutBorse;
