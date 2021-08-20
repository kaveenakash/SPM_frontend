import { categories } from "../store/data";

export const CategoryCheck = (categories, id) => {
  let newCategories = categories.map((item) => {
    if (item.id === id) {
      return { id: item.id, name: item.name, isChecked: !item.isChecked };
    }
    return item;
  });
  if (id !== 1 && newCategories[0].isChecked) {
    newCategories[0].isChecked = false;
  }
  if (id === 1 && newCategories[0].isChecked) {
    let temp = newCategories.map((item) => {
      if (item.id !== 1) {
        return { id: item.id, name: item.name, isChecked: false };
      }
      return item;
    });
    newCategories = temp;
  }
  return newCategories;
};


export const FilterListings = (categories,allListings) =>{
  const checkedCategories = categories.filter(item => item.isChecked).map(item => item.id)
    let filterdData;
    if(checkedCategories.includes(1)){
      filterdData = allListings
    }else{
      
       filterdData = allListings.filter(item => checkedCategories.includes(item.id))
    }
    return filterdData
}
