import PublicNotice from "../../components/PublicNotice";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PublicNotices = () => {
  return (
    <div>
      <Header
        userName={localStorage.getItem("User") ? "Ana Silva" : "Roberto Silva"}
      />
      <PublicNotice />
      <Footer />
    </div>
  );
};

export default PublicNotices;
