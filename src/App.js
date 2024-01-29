
import './App.css';
import CategoryContainer from './Components/Category-Container/CategoryContainer';
import CategoryItem from './Components/Category-Item/CategoryItem';
import './categories.styles.scss'

const categories=[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "_imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    get "imageUrl"() {
      return this["_imageUrl"];
    },
    set "imageUrl"(value) {
      this["_imageUrl"] = value;
    },
  }
]


function App() {
  return (
    
      <CategoryContainer>
      {categories.map(category=><>
          <CategoryItem category={category}/>
      </>)}
      </CategoryContainer>
    
  );
}

export default App;
