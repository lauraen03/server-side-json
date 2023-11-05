const showRecipes = async () => {
  try {
    const recipesJSON = await getRecipes();
    const appElement = document.getElementById('app');

    if (!recipesJSON) {
      console.log('Invalid load of JSON');
      return;
    }

    recipesJSON.forEach((recipe) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';
      appElement.appendChild(itemDiv);

      const h2 = document.createElement('h2');
      h2.innerHTML = recipe.name;
      itemDiv.appendChild(h2);

      const ul = document.createElement('ul');
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.innerHTML = ingredient;
        ul.appendChild(li);
      });
      itemDiv.appendChild(ul);

      const p = document.createElement('p');
      p.innerHTML = recipe.instructions;
      itemDiv.appendChild(p);

      const img = document.createElement('img');
      img.src = recipe.image;
      img.alt = `${recipe.name} Image`;
      img.style.width = '200px'; 
      img.style.height = '200px'; 
      itemDiv.appendChild(img);
    });
  } catch (error) {
    console.log('Error retrieving JSON');
  }
};

const getRecipes = async () => {
  try {
    const response = await fetch('/api/data');
    return response.json();
  } catch (error) {
    console.log('Error retrieving JSON');
    return null;
  }
};

window.onload = () => showRecipes();
