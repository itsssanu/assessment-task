import React from 'react';
import { classNames } from '../utilities';

export const SearchIcon = ({ fill = '#000', className, onClick }) => {
  return (
    <svg className={classNames('', className ? className : '')}
      onClick={onClick ? onClick : () => null} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.511 15.9748C16.246 14.4286 17.987 10.2258 16.3997 6.58762C14.8124 2.94945 10.4978 1.25355 6.7628 2.79974C3.02781 4.34593 1.28679 8.54869 2.87412 12.1869C4.46145 15.825 8.77605 17.5209 12.511 15.9748Z" stroke="#A99D9D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.833 14.4478L20.5321 19.9999" stroke="#A99D9D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill={fill} />
      </g>
    </svg>
  );
};