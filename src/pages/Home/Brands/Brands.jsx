import { SiBentley, SiBmw, SiFord, SiMercedes, SiTesla } from "react-icons/si";
import { TbBrandToyota } from "react-icons/tb";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-3">


        <Link to={`/products/Toyota`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <TbBrandToyota className="text-7xl grow" />
            <p className="font-bold text-xl">Toyota</p>
          </div>
        </Link>

        <Link to={`/products/BMW`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <SiBmw className="text-7xl grow" />
            <p className="font-bold text-xl">BMW</p>
          </div>
        </Link>

        <Link to={`/products/Ford`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <SiFord className="text-7xl grow" />
            <p className="font-bold text-xl">Ford</p>
          </div>
        </Link>

        <Link to={`/products/Mercedes-Benz`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <SiMercedes className="text-7xl grow" />
            <p className="font-bold text-xl">Mercedez</p>
          </div>
        </Link>

        <Link to={`/products/Tesla`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <SiTesla className="text-7xl grow" />
            <p className="font-bold text-xl">Tesla</p>
          </div>
        </Link>

        <Link to={`/products/Bentley`}>
          <div className="border p-6 flex justify-center items-center gap-3 flex-col hover:bg-slate-200 cursor-pointer">
            <SiBentley className="text-7xl grow" />
            <p className="font-bold text-xl">Bentley</p>
          </div>
        </Link>


      </div>
    </div>
  );
};

export default Brands;
