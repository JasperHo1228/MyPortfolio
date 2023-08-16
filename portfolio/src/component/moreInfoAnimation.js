
export function handleMoreDetailClickAnimation(idName_1, index, currentFrameIdx, toggleClassName , idName_2){
    //the frame one that you choose
    const frame = document.getElementById(`${idName_1}-${index}`);
    
    // If another item is already open, close it first
    const currentFrame = document.getElementById(`${idName_1}-${currentFrameIdx}`);
    if (currentFrame) {
      handleClosingDetailInfo( idName_1, currentFrameIdx, idName_2, toggleClassName);
      currentFrame.classList.toggle(`${toggleClassName}`, false);
    }

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

