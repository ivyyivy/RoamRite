const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;
    // 执行搜索操作
    search(searchTerm);
});

function search(term) {
  // 在这里执行搜索操作，例如发起 AJAX 请求或其他处理
    console.log('执行搜索操作：', term);
}
