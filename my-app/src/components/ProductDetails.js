import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Store/Context";

const ProductDetails = () => {
  const { cartItems, setCartItems, cartCount, setCartCount } =
    useContext(Context);
  const params = useParams();
  const { dataList } = useContext(Context);

  const selectedItem = dataList.filter(
    (item) => item.id === parseInt(params.id)
  );
  const data = selectedItem[0];

  const saveToCart = (obj) => {
    const existingItem = cartItems.find((item) => item.id === obj.id);
    if (existingItem) {
      alert("Item already in the cart");
    } else {
      setCartItems([...cartItems, obj]);
      setCartCount(cartCount + 1);
    }
  };

  return (
    <div>
      <div className="text-3xl text-center mt-16 text-white">
        ProductDetails
      </div>
      {data && (
        <div className="text-white flex w-[60%] m-auto mt-10 justify-between">
          <img
            className="rounded-3xl w-[50%]"
            src={data.image_URL}
            alt="logo"
          ></img>
          <div className="ml-5">
            <h3 className="text-3xl font-bold">{data.name}</h3>
            <h3 className="text-2xl">{data.desc}</h3>
            <h3 className="text-lg text-red-600 font-bold">Special price</h3>
            <h3 className="text-2xl">${data.price} ~ 76% off</h3>
            <div>
              <div className="text-white bg-green-600 w-14 rounded-lg px-2 my-2">
                4.4⭐
              </div>
              <div className="text-lg font-semibold">
                17,202 ratings and 1,587 reviews
              </div>
            </div>
            <button
              className="text-white px-5 font-semibold p-2 rounded-md bg-blue-700 hover:bg-opacity-80"
              onClick={() => {
                saveToCart(data);
              }}
            >
              Add to cart
            </button>
            <button className="text-white m-2 px-5 font-semibold p-2 rounded-md bg-blue-700 hover:bg-opacity-80">
              Buy Now
            </button>
            <div>
              <h1 className="text-lg font-bold">Size:</h1>
              <div className="text-3xl m-2">
                <label className="m-2">
                  <input className="size-5 m-2" name="size" type="radio" />
                  Small
                </label>
                <label className="m-2">
                  <input className="size-5 m-2" name="size" type="radio" />
                  Medium
                </label>
                <label className="m-2">
                  <input className="size-5 m-2" name="size" type="radio" />
                  Large
                </label>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-lg font-bold">Available Offers:</p>
              <p>🏷️Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
              <p>
                🏷️Bank Offer10% off on Citi-branded Credit Card EMI
                Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
              </p>
              <p>
                🏷️Bank OfferFlat ₹1,250 off on HDFC Bank Credit Card EMI Txns on
                6 and 9 months tenure, Min. Txn Value: ₹15,000T&C
              </p>
              <p>
                🏷️Special PriceGet extra 19% off (price inclusive of
                cashback/coupon)T&C
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
