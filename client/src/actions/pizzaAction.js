import axios from "axios";
import swal from "sweetalert";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    console.log(response.data);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};
export const getSpacial = () => async (dispatch) => {
  dispatch({ type: "GET_SPECIAL_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getSpacial");
    console.log("special", response.data);
    localStorage.setItem("special", JSON.stringify(response.data));
    dispatch({ type: "GET_SPECIAL_SUCCESS", payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "GET_SPECIAL_FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post("/api/pizzas/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
  }
};
export const addSpecial = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_SPECIAL_REQUEST" });
  try {
    const res = await axios.post("/api/pizzas/addspecial", { pizza });
    console.log(res);
    dispatch({ type: "ADD_SPECIAL_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_SPECIAL_FAIL", payload: err });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/getpizzabyid", { pizzaId });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
  }
};
export const getSpecialById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_SPECIALBYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/getspecialbyid", {
      pizzaId,
    });
    dispatch({ type: "GET_SPECIALBYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_SPECIALBYID_FAIL", payload: err });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/updatepizza", {
      updatedPizza,
    });
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (err) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
  }
};
export const updatespacial = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_SPECIALBYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/updatespacial", {
      updatedPizza,
    });
    dispatch({ type: "UPDATE_SPECIALBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (err) {
    dispatch({ type: "UPDATE_SPECIALBYID_FAIL", payload: err });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post("/api/pizzas/deletepizza", { pizzaId });
    swal("Pizza Deleted Succss!", "success");
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    swal("Errro While Deleteing Pizza");
  }
};

export const filterPizza =
  (searchkey, category, searchPrice, searchByQuanity) => async (dispatch) => {
    let filterdPizza;

    dispatch({ type: "GET_PIZZAS_REQUEST" });
    const res = await axios.get("/api/pizzas/getAllPizzas");

    try {
      const res = await axios.get("/api/pizzas/getAllPizzas");
      filterdPizza = res.data.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchkey)
      );
      if (category !== "all") {
        filterdPizza = res.data.filter(
          (pizza) => pizza.category.toLowerCase() === category
        );
      }
      if (searchPrice !== "AllPrice") {
        filterdPizza = res.data.filter((pizza) => pizza.price == searchPrice);
      }
      if (searchByQuanity !== "AllQTY") {
        filterdPizza = res.data.filter(
          (pizza) => pizza.isQuantity == searchByQuanity
        );
      }
      dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
    } catch (error) {
      dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
  };
