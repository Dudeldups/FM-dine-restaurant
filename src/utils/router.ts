const router = () => {
  const content = document.querySelector("#content")!;

  document.addEventListener("click", function (event) {
    const target = (event.target as HTMLAnchorElement).closest("a");
    if (target && target.getAttribute("href")) {
      event.preventDefault();
      const href = target.getAttribute("href") as string;
      fetchPage(href);
    }
  });

  window.addEventListener("popstate", function (event) {
    const page = event.state.page;
    if (page) {
      fetchPage(page, false);
    }
  });

  function fetchPage(page: string, addToHistory = true) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const pageContent = parser.parseFromString(data, "text/html");
        content.innerHTML = pageContent.querySelector("#content")!.innerHTML;
        const cleanURL =
          page === "index.html" ? "/" : page.replace(".html", "");
        if (addToHistory) {
          history.pushState({ page: cleanURL }, "", cleanURL);
        } else {
          history.replaceState({ page: cleanURL }, "", cleanURL);
        }
      })
      .catch(error => {
        console.error(`Error fetching ${page} page:`, error);
      });
  }

  const currentPathname = window.location.pathname;
  if (currentPathname !== "/") {
    fetchPage(currentPathname);
  }
};

export default router;
