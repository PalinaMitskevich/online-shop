import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import './index.css'
import {useDispatch} from "react-redux";


type Props = {
  options: Array<DropDownOption>,
  title: string,
  onClick: (option: string) => void
}

export const DropDown: React.FC<Props> = ({ options, title, onClick }) => {
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const handleDropDownClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryClick = (option: string) => {
    // @ts-ignore
    dispatch(onClick(option))
  }

  return (
    <div className='dropdown-container'>
      <div className='rt'>
        <p onClick={handleDropDownClick} className='dropdown-header'>{title}</p>
        {isOpen ?  <IoMdArrowDropdown /> : null}
      </div>
      {isOpen && (
        <ul className='dropdown-list'>
          {options.map(({ name, checked}, index) => (
            <li key={index} onClick={() => handleCategoryClick(name)}>
              <input type='checkbox' checked={checked}/>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};