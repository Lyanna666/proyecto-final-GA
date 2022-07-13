# Final Project [General Assembly](https://https://generalassemb.ly/)

### Tree Directory

```───src
    ├───api
    ├───components
    │   ├───aside
    │   ├───elements
    │   ├───Error
    │   ├───Favorites
    │   ├───Footer
    │   ├───Header
    │   ├───HeaderMenu
    │   ├───Home
    │   ├───loading
    │   ├───pagination
    │   ├───Pictograms
    │   └───table
    ├───Constants
    ├───pages
    ├───styles
    └───Utils
```


## API Reference

#### Get all items

```http
  GET /api/items
```

```
  https://api.arasaac.org/api/pictograms
```


| Parameter | Type     | 
| :-------- | :------- | 
| `api_key` | `string` | 

#### Code

>Const 
 
```
const urlGlobal = 'https://api.arasaac.org/api/pictograms';
const urlAll = '/all/';
const urlBest = '/bestsearch/';
const urlSearch = '/search/';
```

```JavaScript 
export async function fetchAllPictograms(language) {
  try {
    const response = await fetch(urlGlobal + urlAll + language, {
      method: 'GET',
    });
    const pictograms = await response.json();
    return pictograms;
  } catch (error) {
    console.error({ error });
    alert('Ha ocurrido un error:', error);
  }
}
```


## Authors :octocat:

- [@jacobo87](https://www.github.com/jacobo87)
- [@Lyanna666](https://github.com/Lyanna666/)
