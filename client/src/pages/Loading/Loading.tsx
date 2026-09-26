import styles from "./Loading.module.scss";
import { PageLayout } from "@/layout";

const LoadingPage = () => {
  return (
    <PageLayout className={styles.loading}>
      <p>Loading...</p>
    </PageLayout>
  );
};

export default LoadingPage;
