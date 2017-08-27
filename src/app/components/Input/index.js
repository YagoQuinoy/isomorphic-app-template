import React from 'react'

const Input = ({label, name, value, onChange}) => (
  <label>
    {label}
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </label>
)

export default Input
