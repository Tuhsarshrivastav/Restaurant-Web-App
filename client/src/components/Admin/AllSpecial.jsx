import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const ALLSpecial = () => {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => state.getSpacial);

  console.log("end", pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div style={{ height: "200px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={pizzas[0]?.image}
                  alt="logo"
                  width="100px"
                  height="100px"
                />
              </td>
              <td>{pizzas[0]?.name}</td>
              <td>
                Small : {pizzas[0]?.prices[0]["small"]}
                <br />
                Medium : {pizzas[0]?.prices[0]["medium"]}
                <br />
                Large : {pizzas[0]?.prices[0]["large"]}
              </td>
              <td>{pizzas[0]?.category}</td>
              <td>
                <Link to={`/admin/editspecial/${pizzas[0]?._id}`}>
                  <AiFillEdit style={{ cursor: "pointer" }} />
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ALLSpecial;
