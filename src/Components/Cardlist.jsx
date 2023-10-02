import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import carData from "./Data/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCars,
  selectCars,
  setCurrentPage,
  selectTotalPages,
  selectCurrentPage,
} from "../Components/Redux/Carslice";

const CardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
 

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    navigate(`/${page}`);
  };

  useEffect(() => {
    dispatch(setCars(carData));

  }, [dispatch]);
  return (
    <>
      <div className="container my-4 ">
        <div className="row">
          {cars.slice((currentPage - 1) * 6, currentPage * 6).map((car) => (
            <div className="col-md-4 g-4 ">
              <Card data={car} />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between ">
          <button
            type="button"
            class="btn btn-dark"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CardList;
