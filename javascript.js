


// var text = 'Is this is intersting subject not is';
// var pattern =/is/gi;
// var result = text.match(pattern)


// console.log(result)


// var pattern = /do/;// var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione dolore error expedita rem nihil a voluptates, pariatur sed, iste esse odio maiores eius tempore similique velit voluptatibus odit. Sapiente?'

// var result = text.match(pattern)

// console.log(result)


// var text= 'Is this all there is?';
// var pattern = /[^a-h]/g;
// var result = text.match(pattern)

// console.log(result)







  
const inputs = document.querySelectorAll('input');

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        console.log(e.target.attributes.name.value);
        

    })
})