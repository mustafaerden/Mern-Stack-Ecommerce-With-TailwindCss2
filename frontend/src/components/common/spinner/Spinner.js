import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.deneme}>
      <img src="/spinner.svg" alt="Loading..." />
    </div>
  );
};

export default Spinner;
