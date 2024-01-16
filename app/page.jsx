import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Vechile Number Plate
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Verification System</span>
    </h1>
    <p className="desc text-center">
      Implement a Number Plate Recognition (NPR) system capable of capturing and
      extracting number plate information from images or video streams
    </p>

    <Feed />
  </section>
);

export default Home;
