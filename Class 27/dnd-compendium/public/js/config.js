export async function targetTypeMap(url) {
  const res = await fetch(url);
  const data = await res.json();
  const results = data.results;
  //console.log(results);

  // Have the object here to hold all the search parameters
  const targetMap = {};

  // We need to loop through the data
  // From there, we have to grab the names and indexes of the items we're searching for
  results.forEach((item, index) => {
    const rawIndex = item.index;
    console.log(rawIndex);

    // Variant 1: original (e.g. "two-handed")
    const original = rawIndex;

    // Variant 2: space version (e.g. "two handed")
    const withSpaces = rawIndex.split('-').join(' ');
    //console.log(withSpaces);

    // Variant 3: no-space version (e.g. "twohanded")
    const noDashSpaces = rawIndex.split('-').join('');
    //console.log(noDashSpaces);

    // Add all variants pointing to the same index
    targetMap[withSpaces] = rawIndex;
    targetMap[original] = rawIndex;
  })
  console.log("export const targetMap =", JSON.stringify(targetMap, null, 2));
  return targetMap;
}

// Example 
/* async function generateTargetNameMap() {
  const res = await fetch("https://www.dnd5eapi.co/api/2014/weapon-properties");
  const data = await res.json();
  const results = data.results;

  const targetNameMap = {};

  results.forEach((item, i) => {
    const index = i + 1;
    const rawIndex = item.index.toLowerCase(); // ensure lowercase

    // Variant 1: original (e.g. "two-handed")
    const original = rawIndex;

    // Variant 2: space version (e.g. "two handed")
    const withSpaces = rawIndex.split('-').join(' ');

    // Variant 3: no dash version (e.g. "twohanded")
    const noDash = rawIndex.split('-').join('');

    // Add all lowercase variants pointing to the same index
    targetNameMap[original] = index;
    targetNameMap[withSpaces] = index;
    targetNameMap[noDash] = index;
  });

  console.log("export const targetNameMap =", JSON.stringify(targetNameMap, null, 2));
}

generateTargetNameMap();
*/

// This is code for if you want the code outside
/*
    // High-level
    //document.querySelector('.high-level').innerText = spell?.higher_level || "No Description Available";
    const higherLevel = spell.higher_level;

    const highList = document.querySelector('.high-level-descript-slot');
    const oneHighL = document.querySelector('.high-level');
        // Clear the list before adding new components
        highList.innerHTML = '';
        oneHighL.innerHTML = '';
        highList.style.display = 'block';
        // Check if there are components BEFORE looping
        if (higherLevel.length > 0) {
          if (higherLevel.length > 1) {
            higherLevel.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element;
              highList.appendChild(li);
            });
          } else if (higherLevel.length === 1) {
            oneHighL.innerHTML = higherLevel[0];
          }
        } else {
          highList.innerHTML = '<li>No Description Available</li>';
        }
*/