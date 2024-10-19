import React from 'react'

interface TextAreaFieldProps {
  label: string
  name: string
  value: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={4}
        className="mt-1 p-2 w-full border dark:text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  )
}

export default TextAreaField
