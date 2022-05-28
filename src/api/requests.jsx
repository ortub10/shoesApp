import { API } from "./api";

export const handelerGetShoes = async () => {
  const { data } = await API.get("/shoes");
  return data;
};

export const handelerPostShoe = async (body) => {
  const shoeData = await API.post("/shoes", body);
  return shoeData;
};

export const handelerDeleteShoe = async (id) => {
  await API.delete(`/shoes/${id}`);
};

export const handelerUpdateShoe = async (id, body) => {
  const shoeData = await API.put(`/shoes/${id}`, body);
  return shoeData;
};
