import React from 'react'

const Textarea = ({label, name, value, onChange}) => {(
  <label>
    {label}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
    />
  </label>
)}

export default Textarea
