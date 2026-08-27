import type { SubmitEvent } from "react";
import {
  Clock3,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
}

const ContactInfoItem = ({
  icon: Icon,
  title,
  children,
}: ContactInfoItemProps) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex w-5 shrink-0 justify-center pt-0.5">
        <Icon
          size={17}
          strokeWidth={2.5}
          className="text-black"
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-[16px] font-medium leading-[1.2] text-black">
          {title}
        </h3>

        <div className="mt-1.5 text-[12px] leading-[1.4] text-black">
          {children}
        </div>
      </div>
    </div>
  );
};

const FormInput = ({
  label,
  placeholder,
  name,
  type = "text",
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={name}
        className="text-[12px] font-medium leading-none text-black"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-[53px] w-full rounded-[8px] border border-[#c8c8c8] bg-white px-5 text-[12px] text-black outline-none transition placeholder:text-[#9e9e9e] focus:border-[#a98a39] focus:ring-1 focus:ring-[#a98a39]"
      />
    </div>
  );
};

const ContactSection = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full bg-white px-6 py-[74px] sm:px-8">
      <div className="mx-auto w-full max-w-[680px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[25px] font-bold leading-[1.2] tracking-[-0.02em] text-black sm:text-[26px]">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-3 max-w-[470px] text-[12px] leading-[1.45] text-[#a5a5a5]">
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us
            <br className="hidden sm:block" />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Content */}
        <div className="mt-[88px] grid grid-cols-1 gap-[70px] md:grid-cols-[230px_minmax(0,1fr)] md:gap-[55px] lg:mt-[89px]">
          {/* Contact information */}
          <div className="space-y-[31px]">
            <ContactInfoItem icon={MapPin} title="Address">
              <p>236 5th SE Avenue, New</p>
              <p>York NY10000, United</p>
              <p>States</p>
            </ContactInfoItem>

            <ContactInfoItem icon={Phone} title="Phone">
              <p>Mobile: + (84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </ContactInfoItem>

            <ContactInfoItem icon={Clock3} title="Working Time">
              <p>Monday-Friday: 9:00 –</p>
              <p>22:00</p>
              <p>Saturday-Sunday: 9:00 –</p>
              <p>21:00</p>
            </ContactInfoItem>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full"
          >
            <div className="space-y-[27px]">
              <FormInput
                label="Your name"
                placeholder="Abc"
                name="name"
              />

              <FormInput
                label="Email address"
                placeholder="Abc@def.com"
                name="email"
                type="email"
              />

              <FormInput
                label="Subject"
                placeholder="This is an optional"
                name="subject"
              />

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-[12px] font-medium leading-none text-black"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about"
                  className="h-[84px] w-full resize-none rounded-[8px] border border-[#c8c8c8] bg-white px-5 py-5 text-[12px] text-black outline-none transition placeholder:text-[#9e9e9e] focus:border-[#a98a39] focus:ring-1 focus:ring-[#a98a39]"
                />
              </div>

              <button
                type="submit"
                className="mt-[6px] h-[39px] w-full rounded-[4px] bg-[#c2952d] px-4 text-[12px] font-normal text-white transition hover:bg-[#ad8325] focus:outline-none focus:ring-2 focus:ring-[#c2952d] focus:ring-offset-2 sm:w-[165px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;