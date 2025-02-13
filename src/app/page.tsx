import AllContent from "@/components/AllContent";
import CategoryNav from "@/components/categoryNav";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <CategoryNav />
      <AllContent />
      <Footer />
    </div>
  );
}
