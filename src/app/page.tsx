'use client'

import MainContent from "@/components/content/MainContent";
import styles from "./page.module.scss";
import DropdownMenu from "@/components/menu/DropdownMenu";

const Page = () => {
  return (
    <div className={styles.container}>
      <DropdownMenu />
      <main className={styles.page}>
        <MainContent />
      </main>
    </div>
  );
};

export default Page;