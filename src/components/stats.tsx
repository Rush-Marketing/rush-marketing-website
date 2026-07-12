const stats = [
  { num: "2", label: "merken: Kitchen4All en Sani4All" },
  { num: "47", label: "winkels door heel Nederland" },
  { num: "21", label: "specialisten, één club" },
  { num: "9.000+", label: "keukens en badkamers per jaar" },
];

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat" data-reveal={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
