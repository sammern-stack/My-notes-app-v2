// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import "./Home.scss";
import {
  PageContent,
  ActiveNote,
  NotesList,
  Sidebar,
} from "@components/layout";

// ——— Home Component ——————————————————————————————————————————————————————————————————————————————
const Home = () => {
  return (
    <PageContent className="home">
      <NotesList />

      <ActiveNote />

      <Sidebar position="right" />
    </PageContent>
  );
};

export default Home;
