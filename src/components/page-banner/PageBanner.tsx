import backgroundImage from "../../assets/img/fundo-home.png";

interface PageBannerProps {
  title?: string;
  parentLabel?: string;
  currentLabel?: string;
}

const PageBanner = ({
  title = "Checkout",
  parentLabel = "Home",
  currentLabel,
}: PageBannerProps) => {
  const breadcrumbCurrent = currentLabel ?? title;

  return (
    <section
      className="
        relative
        flex
        min-h-[230px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-white
        sm:min-h-[260px]
        md:min-h-[290px]
        lg:min-h-[318px]
      "
      aria-label={`Banner da página ${title}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-[-8px]
            scale-[1.03]
            bg-cover
            bg-center
            bg-no-repeat
            blur-[3px]
          "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-white/65" />

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        <h1
          className="
            m-0
            text-[38px]
            font-normal
            leading-none
            tracking-[-0.8px]
            text-black
            sm:text-[44px]
            md:text-[48px]
            lg:text-[50px]
          "
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-[15px]
            leading-none
            text-black
            sm:mt-6
            sm:text-[16px]
          "
        >
          <span className="font-medium">{parentLabel}</span>

          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L6 6.5L1 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-normal">{breadcrumbCurrent}</span>
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;