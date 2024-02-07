import Image from "next/image";
import styles from "./page.module.css";
import FitnessBox from "@/components/fitnessbox";
import WaterBox from "@/components/waterBox";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <FitnessBox totalCalories={2000} calories={300}/>
        <WaterBox totalWater={100} consumedWater={80}/>
      </div>
    </main>
  );
}
