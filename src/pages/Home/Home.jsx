import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold text-center my-10">Brands List</h1>
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
