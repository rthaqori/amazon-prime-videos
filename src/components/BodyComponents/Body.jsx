import SmallSection from "./SmallSection/SmallSection";
import MediumSection from "./MediusSection/MediumSection";
import LargeSection from "./LargeSection/LargeSection";
import Styles from "./BodyStyles.module.css";

const Body = () => {
  return (
    <section className={Styles.sectionContainer}>
      <SmallSection />
      <MediumSection />
      <SmallSection />
      <LargeSection />
      <SmallSection />
      <SmallSection />
      <MediumSection />
    </section>
  );
};

export default Body;
