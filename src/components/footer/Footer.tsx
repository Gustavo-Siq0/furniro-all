import React from "react";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-14 text-[16px] font-normal leading-none text-[#9c9c9c]">
        {title}
      </h3>

      {children}
    </div>
  );
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className="text-[16px] leading-none text-black transition-opacity duration-200 hover:opacity-60"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 py-12 sm:px-10 md:px-[100px] md:py-[52px]">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.15fr_1fr_1fr_1.15fr] md:gap-8">
          {/* Logo + endereço */}
          <div className="flex flex-col">
            <div className="mb-[58px]">
              <a
                href="/"
                className="inline-block text-[25px] font-bold leading-none tracking-[-0.8px] text-black"
              >
                Funiro.
              </a>
            </div>

            <address className="not-italic text-[16px] font-normal leading-[24px] text-[#a0a0a0]">
              <span className="block">400 University Drive Suite 200 Coral</span>
              <span className="block">Gables,</span>
              <span className="block">FL 33134 USA</span>
            </address>
          </div>

          {/* Links */}
          <FooterColumn title="Links">
            <nav className="flex flex-col gap-[55px]" aria-label="Links">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/shop">Shop</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </nav>
          </FooterColumn>

          {/* Ajuda */}
          <FooterColumn title="Help">
            <nav className="flex flex-col gap-[55px]" aria-label="Help">
              <FooterLink href="/payment-options">
                Payment Options
              </FooterLink>

              <FooterLink href="/returns">Returns</FooterLink>

              <FooterLink href="/privacy-policies">
                Privacy Policies
              </FooterLink>
            </nav>
          </FooterColumn>

          {/* Newsletter */}
          <FooterColumn title="Newsletter">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full max-w-[300px] items-end gap-[12px]"
            >
              <div className="min-w-0 flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Enter Your Email Address
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-0 border-b border-black bg-transparent pb-[7px] text-[14px] font-normal text-black outline-none placeholder:text-[#999999] focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="shrink-0 border-0 border-b border-black bg-transparent pb-[7px] text-[13px] font-medium leading-none text-black"
              >
                SUBSCRIBE
              </button>
            </form>
          </FooterColumn>
        </div>

        {/* Linha */}
        <div className="mt-[68px] border-t border-[#d9d9d9]" />

        {/* Copyright */}
        <div className="pt-[39px]">
          <p className="text-[16px] font-normal leading-none text-black">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;