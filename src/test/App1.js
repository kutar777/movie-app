import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "kimchi",
    imageUrl: "https://biancazapatka.com/wp-content/uploads/2020/07/kimchi-recipe.jpg",
    rating: 4
  },
  {
    id:2,
    name: "hamburger",
    imageUrl: "https://d1omecegou7wuo.cloudfront.net/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg",
    rating: 4.1
  },
  {
    id:3,
    name: "pizza",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    rating: 4.3
  },
  {
    id:4,
    name: "chicken",
    imageUrl: "https://www.thecountrycook.net/wp-content/uploads/2021/02/first-image-Southern-Fried-Chicken-720x1008.jpg",
    rating: 3.8
  },];

function Food({ name, picture, rating })
{
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{ rating }/5.0</h4>
      <img src={picture} alt={name} width="500"/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function RenderFood(dish)
{
  return <Food key={dish.id} name={dish.name} picture={dish.imageUrl} rating={dish.rating} />
}

function App1() {
  return (
    <div>
      {foodILike.map(RenderFood)}
    </div>
  );
}

export default App1;
