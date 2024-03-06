import React, { useState, ChangeEvent } from 'react';
import './Dropdowmenu.css';

interface Option {
  id: number;
  value: string;
  label: string;
}

interface DropdownMenuProps {
  optionss: Option[];
  handleOptionChange: (selectedValue: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ optionss, handleOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    handleOptionChange(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className='dropdown'>
      <option value="">Sort by</option>
      {optionss.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownMenu;
