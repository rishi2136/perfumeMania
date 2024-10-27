import axios from "axios";

// to fetch all the products
export const getProduct = async (url) => {
  const res = await axios(url, {
    headers: {
      "content-type": "application/json",
    },
  });
  return res.data;
};

// to fetch the product by given id
export const getProductById = async (url) => {
  const config = {
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
    },
  };
  const res = await axios(url, config);
  return res.data;
};

// to delete the product by given id
export const deleteProductById = async (url) => {
  try {
    const config = {
      method: "delete",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };
    const res = await axios(url, config);
    console.log(res.data.message);
    if (res.data.error) return console.log(res.data.error);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
