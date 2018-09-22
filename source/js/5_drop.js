const appStyles = (function() {
    return {
        init: function () {
            const drop = document.querySelector('.js-drop')
            drop.addEventListener('click', appStylesFl);
        }
    }
})();
function appStylesFl(e) {
    const drop = document.querySelectorAll('.drop'),
        drops = document.querySelectorAll('.js-drop span'),
        nav = document.querySelector('.topline'),
        body = document.body;

    let hidden = body.getAttribute('class') === 'hidden' ? '' : 'hidden',
        open = nav.dataset.rule  ? '' : 'open';

    for(let i=0;i<drops.length;i++){
        drops[i].classList.toggle('open');
    }

    body.setAttribute('class', hidden);
    nav.dataset.rule = open;
    this.classList.toggle('open');
}

//button for mobile version
try{ appStyles.init(); }catch (e){}