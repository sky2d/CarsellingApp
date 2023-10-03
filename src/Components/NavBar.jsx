import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setSearchQuery,
  selectSearchQuery,
} from "../Components/Redux/Carslice";

function NavBar() {
 
 const dispatch = useDispatch();
 const searchQuery = useSelector(selectSearchQuery);
 const handleSearchChange = (e) => {
   dispatch(setSearchQuery(e.target.value));
   dispatch(setCurrentPage(1)); // Reset page number when search query changes
 };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-light" type="submit">
                Search for cars...
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar