document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as imagens de navegação
    const navImages = document.querySelectorAll(".nav-char img");
  
    // Garante que apenas Tanjiro esteja visível no início
    const allContentDivs = document.querySelectorAll(".hidden-content");
    allContentDivs.forEach((div) => div.classList.add("hidden-content"));
    const initialContent = document.getElementById("content-tanjiro");
    initialContent.classList.remove("hidden-content");
    initialContent.classList.add("visible-content");
  
    // Adiciona evento de clique às imagens de navegação
    navImages.forEach((img) => {
      img.addEventListener("click", () => {
        // Oculta todas as seções
        allContentDivs.forEach((div) => {
          div.classList.remove("visible-content");
          div.classList.add("hidden-content");
        });
  
        // Determina a div alvo a partir do ID da imagem
        const contentId = `content-${img.id.split("-")[0]}`;
        const targetContent = document.getElementById(contentId);
  
        // Exibe a div alvo
        if (targetContent) {
          targetContent.classList.remove("hidden-content");
          targetContent.classList.add("visible-content");
        }
      });
    });
  });
