// Definition Tooltips System
// Hover over [[concept]] links to see definitions

// Concept definitions database
const definitions = {
  "Logos Principle": "The fundamental principle that information constrains physical possibility, making the universe informationally structured rather than causally mechanical.",
  "Witness Field": "Consciousness as a field that selects outcomes from quantum superpositions through the act of observation and measurement.",
  "Coherence Equation": "Mathematical framework quantifying the internal consistency and validation strength of interconnected concepts.",
  "Syzygy Mathematics": "The mathematical study of paired opposites and their resolution through higher-order synthesis.",
  "Grace Function": "The mathematical representation of unmerited divine intervention that enables salvation beyond human capability.",
  "Moral Universe": "The framework where moral actions have real physical consequences in the information substrate of reality.",
  "Quantum Bridge": "The connection between quantum mechanics and consciousness through the collapse of wave functions.",
  "Information Substrate": "The fundamental informational nature of reality underlying physical manifestations.",
  "Observer Effect": "The phenomenon where consciousness affects quantum outcomes through the act of measurement.",
  "Resurrection Physics": "The framework explaining how consciousness can persist and be reconstituted after physical death.",
  "Spiritual Warfare": "Forces and dynamics in the Logos Field representing conflicts between different informational patterns.",
  "Grace Mathematics": "Mathematical proof that salvation requires external intervention beyond natural processes."
};

// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

// Initialize tooltips on page load
document.addEventListener('DOMContentLoaded', function() {
  // Find all wiki-style links [[concept]]
  const wikiLinks = document.querySelectorAll('a.wiki-link, a[href*="#"]');

  wikiLinks.forEach(link => {
    const conceptName = link.textContent.trim();

    // Check if we have a definition for this concept
    if (definitions[conceptName]) {
      link.addEventListener('mouseenter', function(e) {
        showTooltip(e.target, definitions[conceptName]);
      });

      link.addEventListener('mouseleave', function() {
        hideTooltip();
      });

      link.addEventListener('mousemove', function(e) {
        positionTooltip(e);
      });
    }
  });
});

function showTooltip(element, text) {
  tooltip.textContent = text;
  tooltip.classList.add('show');
}

function hideTooltip() {
  tooltip.classList.remove('show');
}

function positionTooltip(event) {
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  let left = event.pageX + 15;
  let top = event.pageY + 15;

  // Keep tooltip within viewport
  if (left + tooltipWidth > window.innerWidth + window.scrollX) {
    left = event.pageX - tooltipWidth - 15;
  }

  if (top + tooltipHeight > window.innerHeight + window.scrollY) {
    top = event.pageY - tooltipHeight - 15;
  }

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { definitions, showTooltip, hideTooltip };
}
