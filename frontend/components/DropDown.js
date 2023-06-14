import { useState, useEffect } from 'react';

function Dropdownmenu(title, i) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/options')
      .then(response => response.json())
      .then(data => setOptions(data));
  }, []);
  
  return (
  <div className="grid grid-cols-1 grid-rows-2 content-center dropdownmenu">
    <h1>Indicar Etiqueta del Video</h1>
    <select name="selectList" id="selectList">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
  </div>

  )
}
export default Dropdownmenu;
