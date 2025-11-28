export default function decorate(block) {
  const cards = [...block.children];
  
  cards.forEach(card => {
    card.classList.add('card-item');
    
    // Find and wrap image
    const img = card.querySelector('img');
    if (img) {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card-image');
      img.parentNode.insertBefore(imgWrapper, img);
      imgWrapper.appendChild(img);
    }
    
    // Wrap text content
    const textContent = card.querySelector('div:last-child');
    if (textContent) {
      textContent.classList.add('card-content');
    }
  });
}