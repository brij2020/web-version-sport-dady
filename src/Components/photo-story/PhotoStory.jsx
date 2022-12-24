import * as React from 'react';
import { useState } from 'react';
import './photoStory.css'
import slides from './Mockey'

function toaster(message, type, timeout = 5000) {
    const body = document.body;

    if (typeof type === "undefined") {
        return;
    }

    const toast = document.createElement("div");

    toast.classList.add("toast-notification", type);
    toast.innerHTML = message;
    body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("active");
    }, 100);
    setTimeout(() => {
        toast.classList.remove("active");
    }, timeout - 500);
    setTimeout(() => {
        toast.parentNode.removeChild(toast);
    }, timeout);
}

const PhotoStory = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [contextMenuIsOpen, setContextMenuState] = useState(false);
    const timer = React.useRef(null); 
    const next = () => {

        if (activeIndex + 1 > slides.length - 1) {
            setActiveIndex(0);

        } else {
            setActiveIndex(activeIndex + 1);
        }
        // setActiveIndex(activeIndex + 1);

    }
    
    React.useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            if (activeIndex < slides.length - 1) {
                next();
            } else {
                console.log("End of Story");
                toaster("End of Story for Today! &#128526;", "info");

                // setCookie('F5_Daily', true);  // Set cookies - daily seen
                // deleteCookie('EntryPageID'); // Remove temp "entry" URL cookie
                // setTimeout( redirect(entryURL), 50); // Redirect to corresponding page
            }
        }, slides[activeIndex]?.timeOut);
    
    })
    const prev = () => {
        if (activeIndex === 0) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }
    const toggeleMenu = (e, s) => {
        e.preventDefault()
        console.log('se', s)
        if (s === "open") {
            
            document.body.classList.add('menu-open');
            setContextMenuState(true);
            cancelAnimation();
            pauseVideo();
        } else {
            setContextMenuState(false)

            document.body.classList.remove('menu-open');
        }
    }
    // Check if Slide contains video
    function isVideo() {
        return slides[activeIndex].classList.contains("video");
    }

    function pauseVideo() {
        if (isVideo()) {
            const v = slides[activeIndex].querySelector("video");
            v.muted = true;
            v.pause();
        }
    }

    function playVideo() {
        if (isVideo()) {
            const v = slides[activeIndex].querySelector("video");
            v.muted = true;
            v.play();
        }
    }

    function stopVideo() {
        if (isVideo()) {
            const v = slides[activeIndex].querySelector("video");
            v.pause();
            v.currentTime = 0;
        }
    }

    function toggleMute() {
        if (isVideo()) {
            const v = slides[activeIndex].querySelector("video");
            v.muted = !v.muted;
        }
    }

    function cancelAnimation() {
        clearTimeout(timer.current);
    }
    return (
        <main role="main">

            <div class="daily-stories">
                <div class="daily-stories__outer" >
                    <div class="daily-stories__container">
                        {
                            slides && slides.map(({ url, ids, timeOut, contentType } = { url: '', ids: '90K', timeOut: "0", contentType: "" }, i) => {
                                console.log('active indes', activeIndex, i)
                                return (
                                    <div class={`slide ${i === activeIndex ? 'v-slide active' : 'hide-slide'}`} data-timeout={`${timeOut}`} key={ids} >
                                        {
                                            contentType !== 'video' ? (
                                                <img src={url} alt={ids} title="Title 1" />
                                            ) : (
                                                <video src={url} preload="true" muted="muted" />
                                            )
                                        }

                                    </div>

                                )

                            })
                        }

                    </div>
                </div>

                <div class="progress-bars" data-count="4">
                    {
                        slides && slides.map(({ url, ids, timeOut, contentType } = { url: '', ids: '90K', timeOut: "0", contentType: "" }, i) => {
                            return (
                                contentType !== 'video' ? (
                                    <div class={`bar ${i === activeIndex ? 'seen animate' : ''}`} data-index={`${i}`} key={ids}><span style={{ "animation-duration": `${timeOut}ms` }}></span></div>
                                ) : (
                                    <div class={`bar video ${i === activeIndex ? 'seen animate' : ''}`} data-index={`${i}`} key={ids}><span style={{ "animation-duration": `${timeOut}ms` }}></span></div>
                                ))
                        })
                    }

                </div>

                <a class="logo" href="#" title="Cretive Design Lab">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path fill="#f6bb42" d="M63 32H53c0-5.801-2.35-11.051-6.15-14.851l7.07-7.069C59.53 15.689 63 23.439 63 32z" />
                        <path fill="#8cc152" d="M53 32h10c0 8.55-3.46 16.3-9.08 21.909l-7.07-7.06C50.65 43.05 53 37.8 53 32z" />
                        <path fill="#37bc9b" d="M53.92 53.909v.011C48.31 59.529 40.57 63 32 63V53c5.8 0 11.05-2.351 14.85-6.15z" />
                        <path fill="#e9573f" d="M53.92 10.08l-7.07 7.069C43.05 13.35 37.8 11 32 11V1c8.57 0 16.31 3.47 21.92 9.08z" />
                        <path fill="#ffce54" d="M53 32H43c0-3.04-1.23-5.79-3.22-7.78l7.069-7.07C50.65 20.949 53 26.199 53 32z" />
                        <path fill="#48cfad" d="M39.78 39.779l7.069 7.07C43.05 50.649 37.8 53 32 53V43c3.04 0 5.79-1.23 7.78-3.221z" />
                        <path fill="#4a89dc" d="M32 53v10c-8.56 0-16.31-3.471-21.92-9.08l7.07-7.07C20.95 50.649 26.21 53 32 53z" />
                        <path fill="#5d9cec" d="M32 43v10c-5.79 0-11.05-2.351-14.85-6.15l7.069-7.07C26.21 41.77 28.97 43 32 43z" />
                        <path fill="#ed5565" d="M32 11v10c-3.03 0-5.78 1.229-7.77 3.22h-.01l-7.069-7.07C20.95 13.35 26.21 11 32 11z" />
                        <path fill="#967adc" d="M17.15 46.85l-7.07 7.07C4.47 48.31 1 40.56 1 32h10c0 5.8 2.35 11.05 6.15 14.85z" />
                        <path fill="#a0d468" d="M43.01 32H53c0 5.8-2.35 11.05-6.15 14.85l-7.069-7.07C41.77 37.79 43 35.029 43 32z" />
                        <path fill="#ec87c0" d="M17.15 17.149l7.069 7.07C22.23 26.21 21 28.96 21 32H11c0-5.801 2.35-11.051 6.15-14.851z" />
                        <path fill="#ac92ec" d="M24.22 39.779l-7.069 7.07C13.35 43.05 11 37.8 11 32h10c0 3.029 1.23 5.79 3.22 7.779z" />
                        <path fill="#d770ad" d="M10.08 10.08l7.07 7.069C13.35 20.949 11 26.199 11 32H1c0-8.561 3.47-16.311 9.08-21.92z" />
                        <path fill="#fc6e51" d="M46.85 17.149l-7.069 7.07C37.79 22.229 35.04 21 32 21V11c5.8 0 11.05 2.35 14.85 6.149z" />
                        <path fill="#da4453" d="M32 1v10c-5.79 0-11.05 2.35-14.85 6.149l-7.07-7.069C15.69 4.47 23.44 1 32 1z" />
                    </svg>
                </a>

                <div class={`context-menu-container ${contextMenuIsOpen ? 'active' : ''}`}>
                    <a href="#" class="button" onClick={(e) => toggeleMenu(e, 'open')} >
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle fill="#ffffff" cx="7" cy="16" r="2" />
                            <circle fill="#ffffff" cx="16" cy="16" r="2" />
                            <circle fill="#ffffff" cx="25" cy="16" r="2" />
                        </svg>
                    </a>
                    <div class="context-menu">
                        <a href="#" id="c-menu_save" target="_blank" class="link">Save picture</a>
                        <a href="#" id="c-menu_share" target="_blank" class="link">Share</a>
                        <a href="https://creative-design-lab.com" id="c-menu_copy" class="link">Copy link</a>
                        <a href="#" id="c-menu_cancel" class="link" onClick={(e) => toggeleMenu(e, 'cancel')} >Cancel</a>
                    </div>
                </div>
            </div>

            <span id="prev-slide" onClick={() => prev()}></span>
            <span id="next-slide" onClick={() => next()}></span>
            <div class="central-area" data-state="playing">
                <div class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="path_play" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8l6 4-6 4V8z" />
                        <path id="path_pause" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15V9M14 15V9" />
                    </svg>
                </div>
            </div>

        </main>
    )
}

export default PhotoStory;