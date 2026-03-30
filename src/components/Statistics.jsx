function Statistics({ title, items }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
 
      <ul className="stat-list">
        {items.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;