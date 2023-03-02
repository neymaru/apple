let page = 0; // 페이지 정보 초기화
let isScrolling = false; // 스크롤 중인지 여부를 저장하는 변수

window.addEventListener("wheel", (e) => {
  e.preventDefault(); // 기본 스크롤 동작을 막음

  if (isScrolling) return; // 스크롤 중인 경우 함수를 빠져나감

  const direction = e.deltaY > 0 ? "down" : "up";

  if (direction === "up" && page > 0) {
    // 페이지를 이전 페이지로 이동하는 경우
    isScrolling = true;
    document.querySelector(`.section-${page}`).classList.remove("animate__fadeInUp");
    document.querySelector(`.section-${page}`).classList.add("animate__fadeOutDown");
    setTimeout(() => {
      document.querySelector(`.section-${page}`).classList.remove("animate__fadeOutDown");
      document.querySelector(`.section-${page}`).classList.add("animate__fadeInUp");
      document.querySelector(`.section-${page}`).style.top = "100%";
      page--;
      isScrolling = false;
    }, 500); // 애니메이션이 끝나는 시간
  } else if (direction === "down" && page < 2) {
    // 페이지를 다음 페이지로 이동하는 경우
    isScrolling = true;
    document.querySelector(`.section-${page}`).classList.remove("animate__fadeInUp");
    document.querySelector(`.section-${page}`).classList.add("animate__fadeOutUp");
    setTimeout(() => {
      document.querySelector(`.section-${page}`).classList.remove("animate__fadeOutUp");
      document.querySelector(`.section-${page}`).classList.add("animate__fadeInUp");
      document.querySelector(`.section-${page + 1}`).style.top = "0";
      page++;
      isScrolling = false;
    }, 500); // 애니메이션이 끝나는 시간
  }
});
