import {
  BadgeCheck,
  Headphones,
  PackageCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: Trophy,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: BadgeCheck,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: PackageCheck,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4">
      <Icon
        size={58}
        strokeWidth={1.8}
        className="shrink-0 text-[#292929]"
      />

      <div className="flex flex-col">
        <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-[#292929]">
          {title}
        </h3>

        <p className="mt-1 text-[18px] font-normal leading-tight text-[#969696]">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#faf5ed]">
      <div className="mx-auto flex min-h-[267px] w-full max-w-[1440px] items-center px-8 py-10">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-10">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;