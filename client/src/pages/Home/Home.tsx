// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import "./Home.scss";
import {
  ActiveNote,
  Header,
  NotesList,
  Sidebar
} from "@components/layout"

// ——— Home Component ——————————————————————————————————————————————————————————————————————————————
const Home = () => {
  return (
    <div className="home">
      <Sidebar position="left"/>

      <div className="home__content">
        <Header />

        <div className="home__body">
          <NotesList />

          <ActiveNote />

          <Sidebar position="right"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
