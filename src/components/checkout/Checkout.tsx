import { useState, useRef } from "react";
import type { SubmitEvent } from "react";
import toast from "react-hot-toast";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[13px] font-medium text-neutral-900"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          h-[54px]
          w-full
          rounded-[7px]
          border
          border-neutral-300
          bg-white
          px-4
          text-sm
          text-neutral-900
          outline-none
          transition
          placeholder:text-neutral-400
          focus:border-neutral-500
          focus:ring-1
          focus:ring-neutral-200
        "
      />
    </div>
  );
};

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { clearCart, items } = useCartStore();
  const navigate = useNavigate();

  const validateForm = (formData: FormData): boolean => {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const country = formData.get("country") as string;
    const streetAddress = formData.get("streetAddress") as string;
    const city = formData.get("city") as string;
    const province = formData.get("province") as string;
    const email = formData.get("email") as string;

    if (!firstName || firstName.trim().length === 0) {
      toast.error("First Name is required");
      return false;
    }

    if (!lastName || lastName.trim().length === 0) {
      toast.error("Last Name is required");
      return false;
    }

    if (!country || country.trim().length === 0) {
      toast.error("Country / Region is required");
      return false;
    }

    if (!streetAddress || streetAddress.trim().length === 0) {
      toast.error("Street address is required");
      return false;
    }

    if (!city || city.trim().length === 0) {
      toast.error("Town / City is required");
      return false;
    }

    if (!province || province.trim().length === 0) {
      toast.error("Province is required");
      return false;
    }

    if (!email || email.trim().length === 0) {
      toast.error("Email address is required");
      return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const formData = new FormData(event.currentTarget);
    if (!validateForm(formData)) return;

    setIsSubmitting(true);

    try {
      // Simular processamento do pedido
      await new Promise(resolve => setTimeout(resolve, 800));

      const totalAmount = items.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
        return total + price * item.quantity;
      }, 0);

      toast.success(
        `Order placed successfully! Total: Rs. ${totalAmount.toLocaleString("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        {
          style: { background: "#2EC1AC", color: "#fff" },
          iconTheme: { primary: "#fff", secondary: "#2EC1AC" },
          duration: 4000,
        }
      );

      clearCart();
      
      // Redireciona para home após 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Error processing order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24"
        >
          {/* =====================================
              BILLING DETAILS
          ====================================== */}
          <section>
            <h1 className="mb-9 text-[28px] font-bold tracking-[-0.03em] text-neutral-950">
              Billing details
            </h1>

            <div className="space-y-6">
              {/* First + Last name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="First Name"
                  name="firstName"
                />

                <FormField
                  label="Last Name"
                  name="lastName"
                />
              </div>

              <FormField
                label="Company Name (Optional)"
                name="companyName"
              />

              <FormField
                label="ZIP code"
                name="zipCode"
              />

              <FormField
                label="Country / Region"
                name="country"
              />

              <FormField
                label="Street address"
                name="streetAddress"
              />

              <FormField
                label="Town / City"
                name="city"
              />

              <FormField
                label="Province"
                name="province"
              />

              <FormField
                label="Add-on address"
                name="additionalAddress"
              />

              <FormField
                label="Email address"
                name="email"
                type="email"
              />

              {/* Additional information */}
              <div className="pt-1">
                <textarea
                  name="additionalInformation"
                  placeholder="Additional information"
                  rows={2}
                  className="
                    min-h-[54px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-4
                    text-sm
                    text-neutral-900
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-neutral-500
                    focus:ring-1
                    focus:ring-neutral-200
                  "
                />
              </div>
            </div>
          </section>

          {/* =====================================
              ORDER SUMMARY
          ====================================== */}
          <aside className="lg:pt-[14px]">
            {/* Product header */}
            <div className="grid grid-cols-[1fr_auto] items-end">
              <h2 className="text-[15px] font-medium text-neutral-950">
                Product
              </h2>

              <h2 className="text-[15px] font-medium text-neutral-950">
                Subtotal
              </h2>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[13px] text-neutral-400">
                Asgaard sofa&nbsp; × 1
              </span>

              <span className="text-[13px] text-neutral-700">
                Rs. 250,000.00
              </span>
            </div>

            <div className="my-5 border-t border-neutral-200" />

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-neutral-900">
                Subtotal
              </span>

              <span className="text-[13px] text-neutral-700">
                Rs. 250,000.00
              </span>
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[14px] font-medium text-neutral-900">
                Total
              </span>

              <span className="text-[20px] font-semibold text-[#c88a08]">
                Rs. 250,000.00
              </span>
            </div>

            <div className="my-7 border-t border-neutral-200" />

            {/* Payment methods */}
            <div className="space-y-5">
              {/* Selected payment */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="bank-transfer"
                  defaultChecked
                  className="
                    h-4
                    w-4
                    appearance-none
                    rounded-full
                    border
                    border-black
                    bg-black
                    ring-1
                    ring-offset-2
                    ring-offset-white
                    checked:ring-black
                  "
                />

                <span className="text-[14px] font-medium text-neutral-900">
                  Direct Bank Transfer
                </span>
              </label>

              <p className="text-[12px] leading-[1.6] text-neutral-400">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>

              {/* Other payment options */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="bank-transfer-2"
                  className="
                    h-4
                    w-4
                    appearance-none
                    rounded-full
                    border
                    border-neutral-400
                    bg-white
                  "
                />

                <span className="text-[13px] text-neutral-400">
                  Direct Bank Transfer
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash-on-delivery"
                  className="
                    h-4
                    w-4
                    appearance-none
                    rounded-full
                    border
                    border-neutral-400
                    bg-white
                  "
                />

                <span className="text-[13px] text-neutral-400">
                  Cash On Delivery
                </span>
              </label>
            </div>

            {/* Privacy */}
            <p className="mt-8 text-[12px] leading-[1.65] text-neutral-700">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our{" "}
              <a
                href="#"
                className="font-semibold text-neutral-900 underline"
              >
                privacy policy
              </a>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                mt-8
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                rounded-[8px]
                border
                border-neutral-800
                bg-white
                text-[14px]
                font-medium
                text-neutral-900
                transition
                hover:bg-neutral-900
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-300
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Processing..." : "Place order"}
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
};

export default Checkout;