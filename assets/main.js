let btn_share = document.getElementById('btn_share');
let btn_share_modal = document.getElementById('btn_share_modal');
let modal = document.getElementById('modal');
let modal_pin = document.getElementById('modal_pin');
let article_footer = document.getElementById('article-footer');
let close = true;


btn_share_modal.addEventListener('click', open_modal);
btn_share.addEventListener('click', open_modal);
window.addEventListener('resize', res);


function res(){
    if (screen.width < 785 && close === false) {
        modal_pin.removeAttribute('style');
        modal.removeAttribute('style');
        btn_share.removeAttribute('style');
        article_footer.style.display = "none";
        modal.style.display = "flex";
    } else if (close === false) {
        modal_pin.style.display = "block";
        modal.style.display = "block";
        article_footer.style.removeProperty('display');
        btn_share.style.backgroundColor = "hsl(217, 19%, 35%)";
        btn_share.style.backgroundImage= "url('../images/icon-share_white.svg')";
    }
}

function open_modal(){
    
    if (close){
        
        if (screen.width > 785){
            modal.style.display = "block";
            modal_pin.style.display = "block";
            btn_share.style.backgroundColor = "hsl(217, 19%, 35%)";
            btn_share.style.backgroundImage= "url('../images/icon-share_white.svg')";
        }
        else {
            article_footer.style.display = "none";
            modal.style.display = "flex";
        }
        close = false;
    } 
    else {
        modal_pin.removeAttribute('style');
        modal.removeAttribute('style');
        btn_share.removeAttribute('style');
        article_footer.style.removeProperty('display');
        close = true;
    }
}
