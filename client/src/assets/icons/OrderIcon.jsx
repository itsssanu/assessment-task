
import React from 'react';
import { classNames } from '../../utilities';

export const OrderIcon = ({ fill = '#000', className, onClick, style = {} }) => {
    return (
        <svg
            className={classNames('text-black', className ? className : '')}
            onClick={onClick ? onClick : () => null}
            width="29"
            height="28"
            viewBox="0 0 45 44"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={style}
        >
            <path d="M4.40332 5.43127L4.88359 5.59136C7.27675 6.38909 8.47334 6.78794 9.15774 7.73753C9.84217 8.6871 9.84217 9.9484 9.84217 12.471V17.2154C9.84217 22.3432 9.84217 24.9071 11.4352 26.5001C13.0282 28.0931 15.5921 28.0931 20.7199 28.0931H35.2235" stroke="white" strokeWidth="1.81295" strokeLinecap="round" />
            <path d="M14.3742 32.6256C15.8761 32.6256 17.0936 33.8432 17.0936 35.345C17.0936 36.8469 15.8761 38.0645 14.3742 38.0645C12.8723 38.0645 11.6548 36.8469 11.6548 35.345C11.6548 33.8432 12.8723 32.6256 14.3742 32.6256Z" stroke="white" strokeWidth="1.81295" />
            <path d="M30.6911 32.6256C32.193 32.6256 33.4105 33.843 33.4105 35.345C33.4105 36.8469 32.193 38.0645 30.6911 38.0645C29.1893 38.0645 27.9717 36.8469 27.9717 35.345C27.9717 33.843 29.1893 32.6256 30.6911 32.6256Z" stroke="white" strokeWidth="1.81295" />
            <path d="M20.7196 16.3091H15.2808" stroke="white" strokeWidth="1.81295" strokeLinecap="round" />
            <path d="M9.8418 10.8701H30.6008C34.3264 10.8701 36.189 10.8701 36.9953 12.0925C37.8013 13.3149 37.0674 15.0271 35.5998 18.4515L34.8228 20.2645C34.1377 21.8631 33.795 22.6624 33.1139 23.1117C32.4328 23.5608 31.5631 23.5608 29.8238 23.5608H9.8418" stroke="white" strokeWidth="1.81295" />
        </svg>
    );
};
