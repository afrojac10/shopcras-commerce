import Link from "next/link";
import { useSelector } from "react-redux";

import CheckoutItems from "@/components/checkout/items";
import CheckoutStatus from "@/components/checkout-status";
import type { RootState } from "@/store";

import Layout from "../../layouts/Main";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().max(12),
  postal: z.string(),
  city: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
});
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const CheckoutPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });


  const priceTotal = useSelector((state: RootState) => {
    const { cartItems } = state.cart;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">
                  Sign up
                </button>
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Address"
                        {...register("address")}
                      />
                      {errors.address && <span>{errors.address.message}</span>}
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="First name"
                        {...register("firstName")}
                      />
                      {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="City"
                        {...register("city")}
                      />
                      {errors.city && <span>{errors.city.message}</span>}
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Last name"
                      {...register("lastName")}
                      />
                      {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="number"
                        placeholder="Postal code / ZIP"
                        {...register("postal")}
                      />
                      {errors.postal && <span>{errors.postal.message}</span>}
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Phone number"
                        {...register("phoneNumber")}
                      />
                      {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                    </div>

                    {/*<div className="form__col">*/}
                    {/*  <div className="select-wrapper select-form">*/}
                    {/*    <select>*/}
                    {/*      <option>Country</option>*/}
                    {/*      <option value="Argentina">Argentina</option>*/}
                    {/*    </select>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                  <button type="submit" className="btn btn--rounded btn--green">Check</button>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <p className="block__title">We only support ErcasPay</p>
                <ul className="round-options round-options--three">
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/paypal.png" alt="Paypal" />*/}
                  {/*</li>*/}
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/visa.png" alt="Paypal" />*/}
                  {/*</li>*/}
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/mastercard.png" alt="Paypal" />*/}
                  {/*</li>*/}
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/maestro.png" alt="Paypal" />*/}
                  {/*</li>*/}
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/discover.png" alt="Paypal" />*/}
                  {/*</li>*/}
                  {/*<li className="round-item">*/}
                  {/*  <img src="/images/logos/ideal-logo.svg" alt="Paypal" />*/}
                  {/*</li>*/}
                  <li className="round-item">
                    <img src="/images/logos/ercas-logo-black.png" alt="ErcasPay" />
                  </li>
                </ul>
              </div>

              {/*<div className="block">*/}
              {/*  <h3 className="block__title">Delivery method</h3>*/}
              {/*  <ul className="round-options round-options--two">*/}
              {/*    <li className="round-item round-item--bg">*/}
              {/*      <img src="/images/logos/inpost.svg" alt="Paypal" />*/}
              {/*      <p>$20.00</p>*/}
              {/*    </li>*/}
              {/*    <li className="round-item round-item--bg">*/}
              {/*      <img src="/images/logos/dpd.svg" alt="Paypal" />*/}
              {/*      <p>$12.00</p>*/}
              {/*    </li>*/}
              {/*    <li className="round-item round-item--bg">*/}
              {/*      <img src="/images/logos/dhl.svg" alt="Paypal" />*/}
              {/*      <p>$15.00</p>*/}
              {/*    </li>*/}
              {/*    <li className="round-item round-item--bg">*/}
              {/*      <img src="/images/logos/maestro.png" alt="Paypal" />*/}
              {/*      <p>$10.00</p>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <Link href="/cart" className="cart__btn-back">
              <i className="icon-left" /> Back
            </Link>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">
                Continue shopping
              </button>
              <button type="submit" className="btn btn--rounded btn--yellow">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
