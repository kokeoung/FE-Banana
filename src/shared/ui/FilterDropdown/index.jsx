import { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({onChange}) => {
    const [selected, setSelected] = useState('오늘');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['오늘', '이번 주', '이번 달', '올해'];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        if(onChange) onChange(option);
    };

    return (
        <div className="filter-dropdown">
            <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
                {selected} ▼
            </button>

            {isOpen && (
                <ul className="filter-options">
                    {options.map((option => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`filter-option ${option === selected ? 'selected' : ''}`}
                        >
                            {option}
                        </li>
                    )))}
                </ul>
            )}
        </div>
    );
};

export default FilterDropdown;