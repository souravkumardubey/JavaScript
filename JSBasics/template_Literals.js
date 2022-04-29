const name = 'Sourav';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (ES5)

html = '<ul><li>Name : '+ name + '</li><li>Age : '+ age + '</li><li>Job : '+ job + '</li><li>City : '+ city + '</li></ul>'

// With template strings (ES6)

html = `

    <ul>
    
        <li>Name : ${name} </li>
        <li>Age : ${age} </li>
        <li>Job : ${job} </li>
        <li>City : ${city} </li>
    
    </ul>

`;

document.body.innerHTML = html;