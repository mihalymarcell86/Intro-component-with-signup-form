import RegistrationForm from "./components/RegistrationForm";
import Attribution from "./components/Attribution";

import scss from "./styles/App.module.scss";

function App() {
  return (
    <main className={scss.main}>
      <section className={scss.top_section}>
        <h1 className={scss.top__heading}>Learn to code by watching others</h1>
        <p className={scss.top__paragraph}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className={scss.form_section}>
        <h2 className={scss.trial}>
          <strong>Try it free 7 days</strong> then $20/
          <abbr title="month">mo.</abbr> thereafter
        </h2>
        <div className={scss.form_container}>
          <RegistrationForm />
          <p className={scss.form__footer}>
            By clicking the button, you are agreeing to our{" "}
            <a href="/" className={scss.footer__link}>
              Terms and Services
            </a>
          </p>
        </div>
      </section>
      <Attribution />
    </main>
  );
}

export default App;
