let quote = document.getElementsByClassName("quote");
let writer = document.getElementsByClassName("writer");
let pic = document.getElementsByClassName("pic");

document.getElementById("prev").addEventListener("click", function () {
  quote[0].innerHTML = `&nbsp;“ I’ve been interested in coding for a while but never taken
  the jump, until now. I couldn’t recommend this course enough. I’m
  now in the job of my dreams and so excited about the future. ”`;
  writer[0].innerHTML = `Tanya Sinclair <span class="job">UX Engineer</span>`;
  pic[0].style.backgroundImage = `url(/images/image-tanya.jpg)`;
});

document.getElementById("next").addEventListener("click", function () {
  quote[0].innerHTML = `&nbsp;“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`;
  writer[0].innerHTML = `John Tarkpor <span class="job">Junior Front-end Developer</span>`;
  pic[0].style.backgroundImage = `url(/images/image-john.jpg)`;
});
