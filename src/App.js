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
      <div>
        <div className={scss.trial}>
          <strong>Try it free 7 days</strong> then $20/
          <abbr title="month">mo.</abbr> thereafter
        </div>
        <div className={scss.form_container}>
          <form novalidate className={scss.form}>
            <input
              id="firstname"
              placeholder="First Name"
              className={scss.form__input}
            />
            <input
              id="lastname"
              placeholder="Last Name"
              className={scss.form__input}
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className={scss.form__input}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={scss.form__input}
            />
            <button className={scss.submit_button}>
              Claim your free trial
            </button>
          </form>
          <p className={scss.form__footer}>
            By clicking the button, you are agreeing to our{" "}
            <a href="/" className={scss.footer__link}>
              Terms and Services
            </a>
          </p>
        </div>
      </div>
      <Attribution />
    </main>
  );
}

export default App;
