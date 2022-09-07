import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <Header></Header>
    {children}
  </>
);

export default Layout;
