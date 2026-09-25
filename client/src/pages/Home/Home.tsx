// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { PageContent, OpenNote, NotesList, Sidebar } from "@/layout";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
const Home = () => (
  <PageContent className="home">
    <NotesList />

    <OpenNote />

    <Sidebar position="right" />
  </PageContent>
);

export default Home;
