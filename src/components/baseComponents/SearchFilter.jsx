import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import { AdditionalSearchIcon } from '../../assets/icons/AdditionalSearchIcon';
import { SearchIcon } from 'lucide-react';

export const SearchFilter = ({
  onNameSelect,
  onClearSearch,
  value,
  placeholder,
  dropDownOptions,
  onChange = () => {},
  additionalClassName,
  rounded,
  placeholderColor,
  placeholderTextSize,
}) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);
  const [selectionMade, setSelectionMade] = useState(false); // Track if a valid selection was made
  const [showNoData, setShowNoData] = useState(false);

  const handleSearch = (value) => {
    setInputValue(value);
    setSelectionMade(false); // Reset the flag since it's a new search

    if (value) {
      const filteredOptions = dropDownOptions
        .filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10);
      
      if (filteredOptions.length === 0) {
        setShowNoData(true);
        setOptions([{ label: 'No Data', value: 'no-data', disabled: true }]);
      } else {
        setShowNoData(false);
        setOptions(filteredOptions);
      }
    } else {
      setShowNoData(false);
      setOptions([]);
      if (onClearSearch && selectionMade) {
        onClearSearch();
      }
    }
  };

  const handleSelect = (value, option) => {
    setInputValue(option.label);
    setSelectionMade(true);
    setShowNoData(false);
    if (onNameSelect) {
      onNameSelect(option.label, option);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setOptions([]);
    setShowNoData(false);
    if (onClearSearch && selectionMade) {
      // Only call `onClearSearch` if a valid selection was made
      onClearSearch();
    }
  };

  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value || '');
    }
  }, [value]);

  const baseClassName = `font-sans !h-10 flex items-center w-full bg-white rounded-${rounded || 'xl'}`;
  const borderClassName = inputValue || isFocused
    ? 'ring-1 ring-gray-300 text-black'
    : 'ring-1 ring-gray-300 ]';

  return (
    <div>
      <AutoComplete
        style={{
          WebkitTextFillColor: placeholderColor,
          fontSize: placeholderTextSize,
        }}
        variant="borderless"
        className={additionalClassName ? additionalClassName : `${baseClassName} ${borderClassName}`}
        placeholder={placeholder}
        optionFilterProp="label"
        showSearch
        suffixIcon={inputValue ? null : placeholderColor ? <AdditionalSearchIcon /> : <SearchIcon />}
        allowClear
        onSearch={handleSearch}
        onSelect={handleSelect}
        onClear={handleClear}
        onChange={(value, option) => {
          setInputValue(value);
          onChange(value, option);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        options={options}
        notFoundContent={showNoData ? (
          <div className="py-2 px-4 text-gray-500">No Data</div>
        ) : null}
      />
    </div>
  );
};