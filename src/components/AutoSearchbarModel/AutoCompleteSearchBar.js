import React, { useEffect, useState, useRef, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import modelNames from "../AutoSearchbarModel/ModelNames";
import "../AutoSearchbarModel/main-app.css";
import "../AutoSearchbarModel/main-app.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const AutoCompleteSearchBar = () => {
  // const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    modelNames.filter((name) => {
     return pokemon.push({ name })
    })
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  }

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };


  return (
    <Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap" ref={wrapperRef}>
      <h2 id="main-title">Seleziona una categoria</h2>
          <div className="search">
              <input 
                  id="auto"
                  autoComplete="off"
                  required
                  maxLength="20"
                  name="search"
                  className="searchTerm"
                  onClick={() => setDisplay(!display)}
                  placeholder="Cerca una categoria"
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  ref={register({ required: true, minLength: 7 })}
              />
              <button
               type="submit" 
               className="searchButton"
              >
                Submit
              </button>
            </div>
            { errors.search && <h6 id="error-message">Non valido.</h6>}
            {display && (
            <div className="autoContainer">
                {options
                    .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                    .map((value, i) => {
                    return (
                      <Link id="link-list-one" to="/sub-categories-section"
                          onClick={() => updatePokeDex(value.name)}
                          className="option link-lists"
                          key={i}
                          tabIndex="0"
                      >
                      
                      <li className="link-lists">{value.name}</li>
                      </Link>
                    );
                })}
            </div>
            )}
      </div>
   </form>
   </Fragment>
  );
};


export default withRouter(AutoCompleteSearchBar);
