import Navigation from "../../Navigation/Navigation";

const Header = () => {
  return (
    <section className="sticky top-0 z-50 h-16 bg-white">
      <div className="container w-full h-full max-w-screen-xl px-4 mx-auto">
        <Navigation />
      </div>
    </section>
  );
};

export default Header;
