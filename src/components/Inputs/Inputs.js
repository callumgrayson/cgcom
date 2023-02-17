import React from 'react'
import { inputTypes } from "./lists";
function Inputs() {
  return (
    <div>
        <h2>Input Types</h2>
          {inputTypes.map((type) => (
            <div>
              <p>{type}</p>
              <input type={type} />
            </div>
          ))}
    </div>
  )
}

export default Inputs