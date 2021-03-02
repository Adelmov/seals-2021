/* globals fetch */
const update = document.getElementById('update')
const del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('users', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Adelmo',
      'age':'17',
      'lastname': 'Villanueva',
      'hobbies': 'soccer',
      'height': '5,5',
      'user':'dino'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})

del.addEventListener('click', function () {
  fetch('users', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Adelmo',
      'age':'17',
      'lastname': 'Villanueva',
      'hobbies': 'soccer',
      'height': '5,5',
      'user':'dino'
      
    })
  }).then(function (response) {
    window.location.reload()
  })
})
