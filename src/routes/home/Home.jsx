import React from 'react'
import CategoryContainer from '../../Components/Category-Container/CategoryContainer';
import CategoryItem from '../../Components/Category-Item/CategoryItem';
import  categories  from "../../categories.json"


function Home() {
  return (
      <CategoryContainer>
      {categories.map(category=><>
          <CategoryItem key={category.id} category={category}/>
      </>)}
      </CategoryContainer>
    
  );
}

export default Home;
