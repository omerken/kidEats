import style from "./welcome.module.css";

export function Welcome() {
  return (
    <main className={style.welcome}>
      <div className={style.card}>
        <h1 className={style.title}>Welcome to Your App</h1>
        <p className={style.subtitle}>
          This is a temporary welcome card. Feel free to customize it to match
          your needs.
        </p>
      </div>
    </main>
  );
}
