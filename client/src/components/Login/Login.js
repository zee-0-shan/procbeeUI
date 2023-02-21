import "./Login.css";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([
    "flipkart",
    "flipmart",
    "amaze",
    "amazon",
  ]);

  function getSuggestions(value) {
    // Make an API call to fetch suggestions from the database
    fetch(`https://api.example.com/suggestions?input=${value}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the new suggestions
        setSuggestions(data);
      })
      .catch((error) => {
        console.log("Error fetching suggestions from API:", error);
      });
  }

  function getSuggestionValue(suggestion) {
    return suggestion;
  }

  function renderSuggestion(suggestion) {
    return <div>{suggestion}</div>;
  }

  function onInputChange(event, { newValue }) {
    setInputValue(newValue);
  }

  function onSuggestionSelected(event, { suggestionValue }) {
    setInputValue(suggestionValue);
  }

  function onSuggestionsFetchRequested({ value }) {
    getSuggestions(value);
  }

  function onSuggestionsClearRequested() {
    setSuggestions([]);
  }

  const inputProps = {
    placeholder: "Enter company name or GST number",
    value: inputValue,
    onChange: onInputChange,
  };

  return (
    <form>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
