if (document.querySelector(".warning")) {
    const container = document.querySelector(".warning");
    const apply = container.querySelector(".warning__apply");
    apply.addEventListener("click", () => {
      container.classList.remove("warning--active");
      document.cookie = "warning=true; max-age=2592000; path=/";
    });
  };