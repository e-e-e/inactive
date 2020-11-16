import Reactless from '../../src';

const App = () => {
  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Hello World</h1>
      <p>This is the simplest example.</p>
    </div>
  );
};

Reactless.mount(document.body, <App />);
