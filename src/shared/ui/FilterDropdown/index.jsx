import { useState, useEffect, useRef } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ onChange }) => {
    const [selected, setSelected] = useState('오늘');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // 드롭다운 영역을 참조하는 ref

    const options = ['오늘', '이번 주', '이번 달', '올해'];

    // 외부 클릭 시 드롭다운을 닫는 로직
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // 외부 클릭 시 드롭다운 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false); // 옵션 선택 시 드롭다운 닫기
        if (onChange) onChange(option); // 부모 컴포넌트에 선택된 옵션 전달
    };

    return (
        <div className="filter-dropdown" ref={dropdownRef}>
            <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
                {selected} ▼
            </button>

            {isOpen && (
                <ul className="filter-options">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`filter-option ${option === selected ? 'selected' : ''}`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilterDropdown;
