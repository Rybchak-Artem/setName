function setName(text, name) {
    if (typeof text !== 'string') return text;
    return text.replaceAll(`_`, name);
}

const text = `Hi my name is _. I love names _. If you think the name _ is bad, donate me 1000000$ to change my name. And if it's good then only a 100$ /// card: 444111048435907`;
console.log(setName(text, `Artem`)); 