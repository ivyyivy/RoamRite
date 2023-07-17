const searchInput = document.getElementById('searchInput');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownOptions = [
  'where is the closest accessible restaurant?',
  'resources for people with special needs',
  'facilities for people with special needs'
];

// Event listener for input changes
searchInput.addEventListener('input', function() {
  if (this.value.length > 0) {
    // Generate HTML for dropdown options
    const dropdownHTML = dropdownOptions.map(function(option) {
      return `<div>${option}</div>`;
    }).join('');

    dropdownContent.innerHTML = dropdownHTML;
    dropdownContent.classList.remove('hidden');
  } else {
    // Clear dropdown content if search input is empty
    dropdownContent.innerHTML = ''; 
    dropdownContent.classList.add('hidden');
  }
});

// // Hide the dropdown menu when clicking outside the search-input area
// window.addEventListener('click', function(event) {
//   if (!event.target.matches('#searchInput')) {
//     dropdownContent.classList.add('hidden');
//   }
// })
