<style>


.peusdo-code {
  display: inline-block;
  padding: 10px;
  padding-bottom:0;
  color:rgb(51, 204, 51); /* Example color */
  font-weight: bold; /* Example font weight */
  background-color:rgb(41, 41, 43); 
}

.cursor {
  display:inline-block;
  padding-right: 10px; /* Added missing value for padding-right */
  color:rgb(201, 201, 201); /* Example color for cursor */
}

.comment {
  display:inline-block;
  color: #7c7c7c7c;
  font-weight:normal;
  padding-left:10px;
}

</style>


# Styled-Text 

## version  0.0.3-dev

---

Enables colorization of console strings

sample usage: 

```js
import style from '@sasaki/styled-text';

console.log(style(['green', 'bold'], 'Hello World!')); 
```

Console Output:

<div class="peusdo-code">

<p class="cursor"> > </p> Hello World! <p class="comment"> // Green and bold style 'Hello World!'</p>

</div>