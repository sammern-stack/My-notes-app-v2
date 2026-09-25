import { OpenNote, NotesList, PageLayout, ActiveNoteActions } from "@/layout";
import { Dialog } from "@/shared/components";

const Home = () => (
  <PageLayout>
    <NotesList />
    <OpenNote />
    <ActiveNoteActions />
    <Dialog />
  </PageLayout>
);

export default Home;
