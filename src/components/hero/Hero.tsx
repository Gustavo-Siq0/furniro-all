import { Link } from "react-router-dom";
import heroBg from "../../assets/img/hero-bg.png";

export function Hero() {
  return (
    <section
      className="flex min-h-[716px] w-full justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="relative flex w-full max-w-[1183px] items-center justify-end px-5 lg:px-0">
        <div className="mt-[150px] w-full max-w-[643px] rounded-[10px] bg-[#FFF3E3] pb-[37px] pl-[39px] pr-[43px] pt-[62px] md:mt-0">
          <span className="mb-1 block font-poppins text-[16px] font-semibold tracking-[3px] text-[#333333]">
            New Arrival
          </span>

          <h1 className="mb-4 font-poppins text-[40px] font-bold leading-[1.2] text-[#B88E2F] md:text-[52px] md:leading-[65px]">
            Discover Our <br /> New Collection
          </h1>

          <p className="mb-[46px] font-poppins text-[16px] font-medium leading-[24px] text-[#333333] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Link
            to="/shop"
            className="inline-block bg-[#B88E2F] px-[50px] py-[20px] font-poppins text-[16px] font-bold uppercase text-white transition-colors hover:bg-[#9d7725] md:px-[72px] md:py-[25px]"
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;