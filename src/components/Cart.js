import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
    toast.success('Product Removed From Cart', {
      position: 'top-right',
      autoClose: 2000
    });
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-xs-12 col-sm-6:offset-3 col-md-6:offset-3 mt-4 "
      style={{ marginBottom: '10px' }}>
      <Card className="h-100 bg-white">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px', marginTop: '8px' }}
          />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold">{product.title}</Card.Title>
          <Card.Text className="fs-5">${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            background: 'white',
            borderTop: 'none'
          }}>
          <Button
            className="mb-3"
            variant="danger"
            onClick={() => removeFromCart(product.id)}>
            Remove
          </Button>
          <Button to="/" as={Link} className="mb-3 ms-3" variant="primary">
            Continue Shopping
          </Button>
          <ToastContainer />
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="container">
        {cards.length > 0 ? (
          <div className="row">{cards}</div>
        ) : (
          <div>
            <h3>Your cart Is Empty</h3>
            <p className="fs-5">
              <Link to="/" style={{ textDecoration: 'none' }}>
                Continue Shopping <FaLongArrowAltRight />
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
