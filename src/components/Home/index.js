import "./index.scss";

const Home = () => {
  return (
    <section>
      <div className={"intro"}>
        <div className={"intro__container"}>
          <span className={"intro__container__top"}>Hello, I am</span>
          <span className={"intro__container__bottom"}>
            <span className={"intro__container__bottom__name"}>Samuel Mei</span>
            <span className={"intro__container__bottom__trail"} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
