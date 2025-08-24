
import React from 'react';
import { classNames } from '../../utilities';

export const GooglepayIcon = ({ fill = '#000', className, onClick, style = {} }) => {
    return (
        <svg
            className={classNames('text-black', className ? className : '')}
            onClick={onClick ? onClick : () => null}
            width="18"
            height="14"
            viewBox="0 0 18 14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={style}
        >
            <g clip-path="url(#clip0_2_1442)">
                <mask id="mask0_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="9" y="1" width="9" height="11">
                    <mask id="mask1_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="9" y="1" width="9" height="11">
                        <path d="M9.50479 8.43208L13.562 1.40405L15.7721 2.67993C17.1988 3.50339 17.6886 5.32912 16.8638 6.75582L14.579 10.7129C14.0638 11.6044 12.924 11.9101 12.0312 11.3962L9.97991 10.2124C9.35798 9.85076 9.14445 9.054 9.50479 8.43208Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_2_1442)">
                        <path d="M0.736328 0.00268555H17.2641V14H0.736328V0.00268555Z" fill="white" />
                    </g>
                </mask>
                <g mask="url(#mask0_2_1442)">
                    <mask id="mask2_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="9" y="1" width="9" height="11">
                        <path d="M9.3208 1.38H17.2644V11.6618H9.3208V1.38Z" fill="white" />
                    </mask>
                    <g mask="url(#mask2_2_1442)">
                        <rect width="8.45605" height="10.506" transform="matrix(1 0 0 -1 9.18506 11.7686)" fill="url(#pattern0_2_1442)" />
                    </g>
                </g>
                <path d="M9.07238 3.55273L4.0249 12.2944L6.23501 13.5703C7.6617 14.3937 9.48744 13.9053 10.3109 12.4786L13.5847 6.80783C14.0998 5.91631 13.7942 4.77523 12.9014 4.26007L10.8501 3.07628C10.2281 2.71593 9.43272 2.92947 9.07238 3.55273Z" fill="#FDBD00" />
                <path d="M13.562 1.40262L11.9978 0.500427C10.2148 -0.529887 7.93395 0.0813615 6.90363 1.86573L4.0022 6.88918C3.48705 7.78069 3.79267 8.92178 4.68552 9.43694L6.24968 10.3391C7.14119 10.8543 8.28228 10.5487 8.79744 9.65581L12.2607 3.65677C12.9801 2.41025 14.5736 1.98451 15.8188 2.70386L13.562 1.40262Z" fill="#2DA94F" />
                <mask id="mask3_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="2" width="9" height="12">
                    <mask id="mask4_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="2" width="9" height="12">
                        <path d="M7.35342 3.33783L5.62778 2.34354C4.85905 1.90046 3.87544 2.16337 3.43102 2.93077L1.35971 6.50884C0.340075 8.27052 0.944651 10.5233 2.71033 11.5403L4.02492 12.297L5.61844 13.2152L6.30976 13.6129C5.08192 12.7908 4.69222 11.1439 5.44227 9.84802L5.97878 8.92181L7.94198 5.52925C8.38641 4.76318 8.12349 3.78091 7.35342 3.33783Z" fill="white" />
                    </mask>
                    <g mask="url(#mask4_2_1442)">
                        <path d="M0.736328 0.00268555H17.2641V14H0.736328V0.00268555Z" fill="white" />
                    </g>
                </mask>
                <g mask="url(#mask3_2_1442)">
                    <mask id="mask5_2_1442" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="2" width="9" height="12">
                        <path d="M0.864746 2.1167H8.1677V13.6156H0.864746V2.1167Z" fill="white" />
                    </mask>
                    <g mask="url(#mask5_2_1442)">
                        <rect width="7.68732" height="11.6591" transform="matrix(1 0 0 -1 0.777832 13.6853)" fill="url(#pattern1_2_1442)" />
                    </g>
                </g>
            </g>
            <defs>
                <pattern id="pattern0_2_1442" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2_1442" transform="scale(0.0075188 0.00606061)" />
                </pattern>
                <pattern id="pattern1_2_1442" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image1_2_1442" transform="scale(0.00826446 0.00546448)" />
                </pattern>
                <clipPath id="clip0_2_1442">
                    <rect width="16.5277" height="14" fill="white" transform="translate(0.736328)" />
                </clipPath>
                <image id="image0_2_1442" width="133" height="165" preserveAspectRatio="none" xlink:href="data:image/jpeg;base64,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" />
                <image id="image1_2_1442" width="121" height="183" preserveAspectRatio="none" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMAEAMCAwYAAAN8AAAEtwAABu3/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoXHh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoaJjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIALcAeQMBIgACEQEDEQH/xACmAAADAQEBAQAAAAAAAAAAAAAAAQIGBAUDAQADAQEBAAAAAAAAAAAAAAAAAQIEAwUQAAIAAwUJAQEAAAAAAAAAAAABIAMFAjRENQYQEjITIzMEFBUkMBEAAQICCwACAwAAAAAAAAAAAQIDABAwcTKSssLSc5MENBFBMRIiEgABAQYFAwUAAwAAAAAAAAAAAiABwTJyghGRobESMUJDIUFRYYEiohP/2gAMAwEAAhEDEQAAAPU4vtwe153QuaenPpXNLXSuVNdZxsOs4wOw4wNNp8jrsWnGcHfwauaml05wqlqZuSUAwTQAAe/rsjrsOrGcPdw94U0ukTNJzCqWpVIQAxAB7+uyOuw6sbwd/B3gml0iZuWpmpcyqkSYMQ0Hv67I67DqxnF28XeEmdIlVLUzcihUmpBNNNB7+uyOuw6sZxdvD3gGukpVIpVS1M0nMpoQAz3tdkddh1Yzh7uHvDQ+kpNCU0mom5amaRKAZ72uyOuw6sZw93D3gafSUAJTSCZqXMqpalUmve12R12HVjOHu4e8AHSWmgJpCmblqFUuZVSL3tdkddi1Yzh7uHvAB0kaYJMFKqWpm5FCqWve1uS1uHTjOHu4dEAHSRoAGgSqRTNy5maTXua3J6zDpyPEFgBaABNAAgBSDSkBe1qAyd//2gAIAQIAAQUAlWLHL5dg5dg5cs5cs5cs5cs3LPuye1FjpXaix0rtRY6T2osdJ7UWOldqLHSu1FjpXaix0rtRY6V2osdL5/L/AEH6D9B+g/QfoOr7f//aAAgBAwABBQCZatb+/aN+0b9s37Zv2zftm9a9WZxxYWZxxYW3xxYWZxxYWZxxYWZxxYW3xxYW3xxYW3xxYW3xxYW3y97pHSOkdI6R0Tp+v//aAAgBAQABBQCr1DzZVRdUqI6rUh1WpDq1TPrVM+vVD69UPr1Q+vVD69UPr1Q+vVD69UNL+d5nk+WVvNGMYxj/AIaQvxW80GMYxjj0hfit5oMYxjHHpC/FbzQYxjGMcWkL8VrNNjGMYxxaQvxWs02MYxjHFpC/FazTaxjGMcOkL8VrNNrGMYxw6QvxWs02sYxjGODSF+K1mkDGMYxwaQvxW80gYxjGODSF+K3mkLGMYx7dIX4reaQsYxjHt0hfit5pCxjGMY9mkL6VvNImMYxj2aQvpW80iYxjGPZpC+lbzSNjGMYzSF+K3mkbGMYxmkL8VvNI2MYxjNIX4reafwYxjGaRvpW80/gxjGM0jfSsePMt1L1Zp6s09WaerNPVmnqzT1Zp6s09SaPxJo/Emj8SaPw5ppaRbleYf//aAAgBAgIGPwBH8UyJ9volTkSJyJE5EicnEiciRORhxdhw6YenQRQnZuyAihOzdkBFCdm7ICKE7N2QEUJ2bsgIoTs3ZARQnZuyAihOzdkBFCdm7ICKE7N2QEYf5YcXYY4/B4tTxani1PFqeLU8X9js58fvj0P/2gAIAQMCBj8AV6vmf7kysyZWZMrMmVmTKzJlZmOL8eXX9FVPbuiKqe3dEVU9u6Iqp7d0RVT27oiqnt3RFVPbuiKqe3dEVU9u6Iqp7d0RWPOZ/wAHfod+h36Hfod+h5NDu48v0//aAAgBAQEGPwB9tp9aEJI+EhRAH8iPS5eMely8Y9Tt4x6nbxj1O3jHqdvGPW7eMet28Y9Tt4x63bxj1u3jHrdvGPW7eMOo7Dy3Uhv5AUSQD+wl2KxhFM/tZky7FYwimf2syZdisYRTP7WZMuxWMIpn9rMmXYrGEUz+1mTLsVjCKZ/azJl2KxhFM/tZky7FYwimf2syZdisYRTP7WZMuxWMIpn9rMmXYrGEUz+1mTLsVjCKZ/azJl2KxhFM9tZky7FYwime2syZdisYRTPbWZMuxWMIpntrMmXYrGEUz+1mTLsVjCKZ7azJl2KxhFM9tZky7FYwime2syZdisYRTPbWZMn1AoAJH5cQk2R9KUDFpvlb1xab5W9cWm+VvXFpvlb1xab5W9cWm+VvXFpvlb1xab5W9cWm+VvXFpvlb1xab5W9cWmuVvXFprma1w8VFBBb+P5WhZtD6Qoy/9k=" />
            </defs>
        </svg>
    );
};