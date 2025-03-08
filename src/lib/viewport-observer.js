const options = {
  rootMargin: "0%",
  threshold: 0.4,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.dataset.animate = "false"
      console.log(entry.target)
    }
  });
};

const observer = new IntersectionObserver(callback, options);

export const animateViewport = (element) => {
  observer.observe(element);
}