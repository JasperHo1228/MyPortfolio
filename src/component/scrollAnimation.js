function scrollAnimation(addClassName, selectclassName, threshold){

    const createObserverOptions = (threshold) => ({
      root: null,
      rootMargin: '0px', 
      threshold });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.add(addClassName);
        } 
      });
    }, createObserverOptions(threshold));
  
    const elements = document.querySelectorAll(selectclassName);
    elements.forEach((element) => observer.observe(element));
  
    return observer;
  }
  
  export default scrollAnimation;