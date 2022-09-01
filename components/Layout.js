import BookBar from "./BookBar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <BookBar />
    </div>
  );
};

export default Layout;
