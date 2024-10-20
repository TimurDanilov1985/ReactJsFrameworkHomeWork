import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const { count } = useSelector((state) => state.cartProducts)
    return (
        <div className="header centre">
            <div className="header__logo">
                <Link to="/">
                    <svg width="44.000000" height="38.000000" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs>
                            <pattern id="pattern_128_530" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                <use xlinkHref="#image128_53_0" transform="matrix(0.022727,0,0,0.026316,0,0)" />
                            </pattern>
                            <image id="image128_53_0" width="44.000000" height="38.000000" xlinkHref="data:image/png;base64,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" />
                        </defs>
                        <rect width="44.000000" height="38.000000" fill="url(#pattern_128_530)" fillOpacity="1.000000" />
                    </svg>
                </Link>
                <button className="header__logo__button">
                    <svg width="26.001953" height="26.792969" viewBox="0 0 26.002 26.793" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path d="M18.06 17.41C19.67 15.65 20.63 13.39 20.77 11.01C20.91 8.62 20.23 6.26 18.83 4.33C17.44 2.39 15.42 0.99 13.12 0.36C10.82 -0.27 8.37 -0.08 6.19 0.88C4.01 1.85 2.22 3.53 1.14 5.66C0.05 7.78 -0.27 10.22 0.22 12.55C0.72 14.89 2 16.98 3.86 18.48C5.72 19.98 8.03 20.79 10.42 20.78C12.67 20.79 14.86 20.05 16.66 18.69L24.41 26.5C24.49 26.59 24.59 26.66 24.71 26.71C24.82 26.76 24.94 26.78 25.07 26.79C25.19 26.79 25.31 26.76 25.42 26.71C25.54 26.66 25.64 26.59 25.73 26.5C25.9 26.32 26 26.08 26 25.83C26 25.58 25.9 25.34 25.73 25.16L18.06 17.41ZM1.88 10.28C1.9 8.6 2.41 6.96 3.35 5.56C4.3 4.17 5.64 3.08 7.2 2.44C8.76 1.81 10.47 1.65 12.12 1.99C13.77 2.32 15.29 3.14 16.48 4.34C17.66 5.53 18.47 7.05 18.79 8.71C19.12 10.36 18.95 12.08 18.3 13.63C17.65 15.19 16.56 16.52 15.15 17.45C13.75 18.39 12.1 18.89 10.42 18.89C8.15 18.87 5.97 17.96 4.37 16.35C2.77 14.74 1.88 12.56 1.88 10.28Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero" />
                    </svg>
                </button>
            </div>
            <div className="header__menu">
                <button className="header__menu__button">
                    <svg width="32.000000" height="23.000000" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path d="M0 23L0 20.3L32 20.3L32 23L0 23ZM0 12.76L0 10.07L32 10.07L32 12.76L0 12.76ZM0 2.69L0 0L32 0L32 2.69L0 2.69Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero" />
                    </svg>
                </button>
                <Link to="/">
                    <svg width="29.000000" height="29.000000" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path d="M14.5 19.93C19 19.93 22.65 15.46 22.65 9.96C22.65 4.47 19 0 14.5 0C13.36 0.02 12.24 0.3 11.23 0.82C10.22 1.34 9.34 2.08 8.66 3C7.12 4.99 6.3 7.45 6.34 9.97C6.34 15.46 10 19.93 14.5 19.93ZM14.5 1.81C18 1.81 20.84 5.47 20.84 9.96C20.84 14.46 17.99 18.12 14.5 18.12C11 18.12 8.15 14.46 8.15 9.96C8.15 5.47 11 1.81 14.5 1.81ZM20.84 18.12C20.6 18.12 20.37 18.21 20.2 18.39C20.03 18.55 19.93 18.79 19.93 19.03C19.93 19.27 20.03 19.5 20.2 19.67C20.37 19.84 20.6 19.93 20.84 19.93C22.52 19.94 24.13 20.6 25.32 21.79C26.51 22.98 27.18 24.6 27.18 26.28C27.18 26.52 27.09 26.75 26.92 26.92C26.75 27.09 26.52 27.18 26.28 27.18L2.72 27.18C2.48 27.18 2.25 27.09 2.08 26.92C1.91 26.75 1.81 26.52 1.81 26.28C1.81 24.6 2.48 22.98 3.67 21.79C4.86 20.6 6.47 19.94 8.15 19.93C8.39 19.93 8.62 19.84 8.79 19.67C8.96 19.5 9.06 19.27 9.06 19.03C9.06 18.79 8.96 18.56 8.79 18.39C8.62 18.22 8.39 18.12 8.15 18.12C5.99 18.12 3.92 18.98 2.39 20.51C0.86 22.04 0 24.11 0 26.28C0 27 0.28 27.69 0.79 28.2C1.3 28.71 1.99 29 2.71 29L26.28 29C27 29 27.69 28.71 28.2 28.2C28.71 27.69 29 27 29 26.28C28.99 24.11 28.13 22.04 26.6 20.51C25.08 18.98 23 18.12 20.84 18.12Z" fill="#E8E8E8" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>
                </Link>
                <Link to="/cart">
                    <svg width="31.994141" height="29.000000" viewBox="0 0 31.9941 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path d="M26.2 29C25.55 28.97 24.94 28.69 24.49 28.22C24.05 27.75 23.81 27.12 23.82 26.47C23.83 25.82 24.1 25.21 24.56 24.75C25.02 24.3 25.65 24.04 26.3 24.04C26.94 24.04 27.57 24.3 28.03 24.75C28.49 25.21 28.76 25.82 28.77 26.47C28.79 27.12 28.54 27.75 28.1 28.22C27.66 28.69 27.04 28.97 26.4 29L26.2 29ZM6.75 26.32C6.75 25.78 6.91 25.27 7.2 24.83C7.5 24.39 7.91 24.04 8.4 23.84C8.89 23.64 9.43 23.58 9.95 23.69C10.47 23.79 10.95 24.05 11.32 24.42C11.7 24.8 11.95 25.27 12.06 25.79C12.16 26.31 12.11 26.85 11.9 27.34C11.7 27.83 11.36 28.25 10.92 28.54C10.48 28.84 9.96 29 9.43 29C9.08 29 8.73 28.92 8.4 28.79C8.08 28.66 7.78 28.46 7.53 28.21C7.28 27.96 7.08 27.67 6.95 27.34C6.82 27.01 6.75 26.67 6.75 26.32L6.75 26.32ZM10.55 20.68C10.29 20.68 10.04 20.6 9.83 20.44C9.62 20.28 9.47 20.07 9.4 19.82L4.57 2.36L1.18 2.36C0.86 2.36 0.56 2.23 0.34 2.01C0.12 1.79 0 1.49 0 1.18C0 0.86 0.12 0.56 0.34 0.34C0.56 0.12 0.86 0 1.18 0L5.46 0C5.72 0 5.97 0.08 6.18 0.24C6.38 0.39 6.53 0.61 6.6 0.86L11.43 18.32L24.61 18.32L29 8.27L14.4 8.27C14.24 8.28 14.08 8.25 13.93 8.19C13.79 8.13 13.65 8.05 13.54 7.94C13.42 7.83 13.33 7.69 13.27 7.55C13.21 7.4 13.18 7.25 13.18 7.09C13.18 6.93 13.21 6.77 13.27 6.63C13.33 6.48 13.42 6.35 13.54 6.24C13.65 6.13 13.79 6.04 13.93 5.98C14.08 5.93 14.24 5.9 14.4 5.91L30.81 5.91C31 5.91 31.2 5.95 31.37 6.05C31.54 6.14 31.69 6.27 31.8 6.44C31.9 6.6 31.97 6.79 31.99 6.99C32 7.18 31.97 7.38 31.9 7.56L26.49 19.97C26.4 20.18 26.25 20.36 26.05 20.49C25.86 20.61 25.64 20.68 25.41 20.68L10.55 20.68Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="nonzero" />
                    </svg>
                </Link>
                <div className="header__menu__quantity" style={count === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                    <p>{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;