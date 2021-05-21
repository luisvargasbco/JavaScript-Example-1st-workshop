const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta tempora repudiandae ipsam beatae tenetur necessitatibus, doloribus et odit quod dolores nam voluptates qui deserunt ab dignissimos a facere sunt!'

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listitem = document.createElement('li');
    const listcontent = prompt('Favorite color?');
    listitem.textContent = listcontent;
    list.appendChild(listitem);

    listitem.onclick = function(Event) {
        Event.stopPropagation();
        const listcontent = prompt('Change your color');
        this.textContent = listcontent;
    };
}