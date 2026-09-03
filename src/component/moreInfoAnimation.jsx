
export function handleMoreDetailClickAnimation(idName_1, index, toggleClassName){
    //the frame one that you choose
    const frame = document.getElementById(`${idName_1}-${index}`);
    
    // Open the clicked item
    frame.classList.toggle(`${toggleClassName}`, true);
}

export function handleClosingDetailInfo( idName_1, currentFrameIdx, idName_2, toggleClassName ){
        const frame = document.getElementById(`${idName_1}-${currentFrameIdx}`);
        const contribution = document.getElementById(`${idName_2}-${currentFrameIdx}`);
        contribution.setAttribute('closing', '');
        contribution.addEventListener('animationend', () => {
          contribution.removeAttribute('closing');
        }, { once: true });
        frame.classList.toggle(`${toggleClassName}`, false);
}

