import styles from './Statistics.module.css';

function Statistics({ title, items }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
 
      <ul className={styles.statList}>
        {items.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;