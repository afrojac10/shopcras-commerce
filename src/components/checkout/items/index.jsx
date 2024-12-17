import { useSelector } from "react-redux";

const CheckoutItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
      <div className="checkout">
          <ul className="checkout-items">
              {cartItems.map((item) => (
                  <li key={item.id} className="checkout-item">
                      <div className="checkout-item__content">
                          <div className="checkout-item__img">
                              <img src={item.thumb} />
                          </div>


                          <div className="checkout-item__data">
                              <h3>{item.name}</h3>
                              <span>#{item.id}</span>
                          </div>
                      </div>
                      <h3>${item.price}</h3>
                  </li>
                  ))}
                  </ul>

          <p>Pay with Ercas</p>
      </div>

  );
};

export default CheckoutItems
