import React, { useState, useEffect } from 'react';
import './winnerContainer.scss';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as action from '../../../store/actions/index';
import WinnerPosterCollage from '../WinnerPosterCollage/WinnerPosterCollage';
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary';


const WinnerContainer = () => {

    // Redux States Hooks
    const auth = useSelector(state => state.winner.winnerAuthenticated);


    // Redux Dispatch Hooks
    const setWinnerAuth = useDispatch();

    // React Router 
    const history = useHistory();


    useEffect(() => {
        if (!auth) {
            history.push("/");
        }
    }, [auth])

    const handleRevealWinner = () => {
        setWinnerAuth(action.setWinnerAuth(false));
    }


    return (
        <section className="winnerContainer">
            <div className="winner__crown">
                <div className="winner__crown__spoke1"></div>
                <div className="winner__crown__spoke2"></div>
                <div className="winner__crown__spoke3"></div>
                <div className="winner__crown__spoke4"></div>
                <div className="winner__crown__spoke5"></div>
            </div>

            <WinnerPosterCollage />

            <div className="winner__content-container">
                <div className="winner__content">
                    <p className="typography__subhead">The Shoppies Winner</p>
                    <h1>Prince of Persia: The Sands of Time</h1>
                    <ButtonPrimary handleClick={handleRevealWinner}>Restart</ButtonPrimary>
                </div>
                <svg className="winner__shopify" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#004C3F" />
                    <path d="M43.954 24.4767C43.9335 24.307 43.8109 24.21 43.7087 24.21L41.5828 24.1615L39.7226 22.0039C39.5591 21.81 39.232 21.8585 39.1094 21.907L38.2508 22.2221C38.1691 21.8827 38.026 21.4706 37.842 21.0342C37.2492 19.6766 36.3498 18.9493 35.2869 18.9493L35.062 18.9736L34.9598 18.8524C34.7335 18.5656 34.4571 18.341 34.1499 18.1944C33.8426 18.0479 33.5121 17.9828 33.1814 18.0039C31.8118 18.0524 30.4423 19.2402 29.318 21.3251C28.5536 22.7795 28.0266 24.3914 27.7645 26.0767L25.0458 27.0707C24.2485 27.3616 24.2281 27.3858 24.1259 28.2828C24.085 28.9616 22 48.0891 22 48.0891L39.4978 51.6771L47.0815 49.4467L43.954 24.4767ZM37.3719 22.5615L36.0227 23.0706C36.0273 22.0645 35.8891 21.0647 35.6139 20.113C36.6564 20.3069 37.1675 21.713 37.3719 22.5615ZM35.1029 23.3858L32.1798 24.4524C32.466 23.1676 32.9974 21.907 33.6515 21.0585C33.8968 20.7433 34.2443 20.4039 34.6327 20.21C35.0416 21.1554 35.1233 22.4888 35.1029 23.3858ZM33.2223 19.0948C33.5493 19.0948 33.8151 19.1675 34.0399 19.3615C33.672 19.5796 33.304 19.919 32.977 20.3554C32.0404 21.6377 31.4121 23.1952 31.1577 24.8646L28.7661 25.7373C29.2567 23.0948 31.1168 19.1675 33.2223 19.0948Z" fill="#95BF47" />
                    <path d="M43.7085 24.21L41.5826 24.1615L39.7224 22.0039C39.6611 21.9312 39.5793 21.8827 39.4976 21.8827V51.677L47.0813 49.4467L43.9742 24.4767C43.9333 24.307 43.8107 24.21 43.7085 24.21Z" fill="#5E8E3E" />
                    <path d="M35.2869 28.8404L34.4079 32.7435C34.4079 32.7435 33.4267 32.2101 32.2616 32.3071C30.5445 32.4283 30.5445 33.7132 30.5445 34.0283C30.6467 35.7738 34.5101 36.1617 34.735 40.2587C34.8985 43.483 33.3041 45.6891 30.9738 45.8588C30.1909 45.9304 29.404 45.8103 28.662 45.5058C27.92 45.2014 27.2388 44.7191 26.6606 44.0891L27.2534 41.1072C27.2534 41.1072 28.807 42.489 30.0335 42.3921C30.1812 42.3893 30.3268 42.3507 30.4615 42.2787C30.5961 42.2067 30.7169 42.1027 30.8165 41.9733C30.916 41.8439 30.9922 41.6917 31.0404 41.5261C31.0885 41.3605 31.1076 41.1849 31.0964 41.0102C30.9738 38.7314 27.8258 38.8769 27.6214 35.1192C27.4579 31.9677 29.1954 28.7919 33.0383 28.501C34.5306 28.3798 35.2869 28.8404 35.2869 28.8404Z" fill="white" />
                </svg>

            </div>






        </section>
    )
}

export default WinnerContainer;
