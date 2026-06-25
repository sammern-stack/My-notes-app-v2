// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { PageContent, OpenNote, NotesList, Sidebar } from "@components/layout";

import "./Home.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
const Home = () => (
  <PageContent className="home">
    <NotesList />

    <OpenNote />

    <Sidebar position="right" />
  </PageContent>
);

export default Home;
