const container = document.querySelector('#container');
const btns = document.querySelectorAll('button');
const content = document.createElement('div');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p2.textContent = 'ME TOO!';
h1.textContent = "I'm in a div";
div.append(p2, h1);
p.textContent = "Hey I'm red";
p.style.color = 'red';
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
div.style.cssText =
  'border: 3px solid black; background-color: pink;';
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.append(content, p, h3, div);

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.background = 'blue';
  });
}
