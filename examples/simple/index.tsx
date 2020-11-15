import Reactless from '../../src';

const App = () => {
  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: '#f0f', padding: '10px' }}>
        Hello World
      </h1>
      <div
        style={{
          display: 'inline-block',
          width: 100,
          margin: 0,
          padding: 10,
          backgroundColor: 'green',
        }}
      >
        <p>
          Block <button onClick={() => console.log('ok')}>'Hello'</button>
        </p>
      </div>
      <p>This is the simplest example.</p>
    </div>
  );
};

Reactless.mount(document.body, <App />);
