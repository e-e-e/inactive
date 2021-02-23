import Inactive from '../../src';

const App = () => {
  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Hello World</h1>
      <p>This is the simplest example.</p>
    </div>
  );
};

Inactive.mount(document.body, <App />);
