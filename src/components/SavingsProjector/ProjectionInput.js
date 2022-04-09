import React from "react"
import NumberFormat from "react-number-format"

const ProjectionInput = ({ name, value, handler }) => {
  const handleChange = ({ value }) => {
    const numberVal = Number(value)
    handler(name, numberVal)
  }

  return (
    <div>
      <NumberFormat
        className="formatted_input"
        value={value}
        thousandSeparator={true}
        onValueChange={handleChange}
      />
    </div>
  )
}

export default ProjectionInput
