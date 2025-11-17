const MFC_URL = 'https://myfigurecollection.net/browse.v4.php?keywords='

export function addJanLink(): void {
  const dtElements = document.querySelectorAll('dt');

  for (const dt of dtElements) {
    if (dt.textContent?.toLowerCase().includes("jan code")) {

      const dd = dt.nextElementSibling;

      if (dd && dd.tagName === 'DD' && !dd.querySelector('.mfc-link')) {
        const janCode = dd.textContent?.trim();

        if (janCode && /^\d+$/.test(janCode)) {
          const link = document.createElement('a');
          link.href = `${MFC_URL}${janCode}`;
          link.textContent = " [MFC]";
          link.className = "mfc-link";
          link.target = "_blank";
          link.style.color = "#d93a3a"; // MFC Red
          link.style.fontWeight = "bold";
          link.style.marginLeft = "8px";
          link.style.textDecoration = "none";
          link.style.fontSize = "0.9em";

          dd.appendChild(link);
        }
      }
    }
  }
}
