import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../Utils/statusCode';

const Product = () => {
  // const [products, setProducts] = useState([]);
  const effectRan = useRef(false);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // API call
    if (effectRan.current === false) {
      // Dispatch action for fetchproducts
      dispatch(getProducts());

      // fetch('https://fakestoreapi.com/products')
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     getProducts(data);
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      // Set effectRan to true after API call
      effectRan.current = true;
      return () => console.log('Unmounted!');
    }
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return (
      <img
        src="spinner.gif"
        style={{ height: '60px', weight: '60px', marginTop: '60px' }}
        alt="Spinner"
      />
    );
  }

  if (status === StatusCode.ERROR) {
    return <h5>Something went wrong! Try again later</h5>;
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      style={{ marginBottom: '10px' }}>
      <Card className="h-100 bg-white hover-grow hover-grow:hover">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px', marginTop: '5px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white', borderTop: 'none' }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>All Products</h1>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </>
  );
};

export default Product;
