import React, {useState} from "react";
import { Input } from "antd";
const { Search } = Input;

function SearchFeature(props) {
  
  const [SearchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.searchRefresh(event.currentTarget.value);
  }
  
    return (
    <div>
      <Search
        placeholder="input search text"
        onChange={searchHandler}
        style={{ width: 200, margin: "0 40px" }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;
