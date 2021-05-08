const menu  = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
menu.addEventListener('click', () => {
    nav.classList.toggle('change');
    menu.classList.toggle('change');
})

const vid_wrapper = document.querySelector('.video-wrapper')
const vid = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar');
vid_wrapper.addEventListener('click',() => {
    if(vid.paused)
    {
        vid.play();
        btn.className = 'far fa-pause-circle';
        vid.style.opacity= '1';
    }
    else
    {
        vid.pause();
        btn.className = 'far fa-play-circle';
        vid.style.opacity= '0.3';
    }
})
vid.addEventListener('timeupdate' ,() => {
    const barWidth = vid.currentTime/vid.duration;
    bar.style.width = `${barWidth * 100}%`;
    if(vid.ended)
        {
            btn.className = 'far fa-play-circle';
            vid.style.opacity= '0.3';
            bar.style.width = '0%';
        }
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  });