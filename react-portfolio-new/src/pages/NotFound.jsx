import { Link } from 'react-router-dom';

function NotFound() {
return (
<div style={{ textAlign: 'center', padding: '100px' }}>
<h1>404</h1>
<p>Page Not Found</p>
<Link to="/">Back to Home</Link>
</div>
);
}
export default NotFound;