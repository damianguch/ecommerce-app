import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

  const product = data.find((p) => p.id === Number(id));

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  return (
    <div className="container  mt-5">
      <div className="row justify-content-center">
        <div
          className="col-12 col-md-6 col-sm-8"
          style={{ marginBottom: '10px' }}>
          <Card className="h-100 bg-white" role="button">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ maxWidth: '100px', height: 'auto', marginTop: '5px' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">{product.title}</Card.Title>
              <Card.Title className="fw-normal">
                {product.description}
              </Card.Title>
              <Card.Text className="fs-5">${product.price}</Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                background: 'white',
                borderTop: 'none',
                marginBottom: '5px'
              }}>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add To Cart
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
