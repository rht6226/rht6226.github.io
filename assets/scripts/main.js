(() => {
    
    document.addEventListener('DOMContentLoaded',function(event){

        const typewriterTexts = document.querySelector('#typewriter');
        
        const dataText = [ "A Software Engineer", "A Full Stack Developer", "A Deep Learning Enthusiast", "A Team Player", "Rohit Raj Anand"];
        
        const typeWriter = (text, i, fnCallback) => {
            
            if (i < (text.length)) {
                
                typewriterTexts.innerHTML = text.substring(0, i+1) +'<span class="blink" aria-hidden="true"></span>';
                
                setTimeout(() => {
                    typeWriter(text, i + 1, fnCallback)
                }, 100);
            }
            
            else if (typeof fnCallback == 'function') {
                
                setTimeout(fnCallback, 700);
            }
        }
        
        const StartTextAnimation = (i) => {
            if (typeof dataText[i] == 'undefined'){
                setTimeout(function() {
                    StartTextAnimation(0);
                }, 20000);
            }
            
            if (i < dataText[i].length) {
                
                typeWriter(dataText[i], 0, () => {
                    StartTextAnimation(i + 1);
                });
            }
        }
        StartTextAnimation(0);
    });
    
})()