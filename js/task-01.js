const sum = document.querySelectorAll('#categories')

 sum.forEach(res => console.log(`Number of categories: ${res.children.length}`));


 const items = document.querySelectorAll('.item');

items.forEach(res => console.log(`Category: ${res.firstElementChild.textContent} 
Elements: ${res.querySelector('ul').children.length}`))