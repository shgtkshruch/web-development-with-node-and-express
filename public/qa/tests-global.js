suite('Global Tests', function () {
  test('page has a valid title', function () {
    var title = document.title;
    assert(title && title.match(/\S/) && title.toUpperCase() !== 'TODO');
  });
});
