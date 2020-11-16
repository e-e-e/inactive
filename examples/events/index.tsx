import Reactless from '../../src';

const Item = ({ children }: { children?: JSX.Children }) => {
  return <li>{children}</li>;
};

const App = () => {
  const ref = Reactless.createRef();
  let count = 0;
  return (
    <div>
      <button
        onClick={() => {
          const item = <Item>Item {count++}</Item>;
          item && ref.current?.appendChild(item);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          const nodes = ref.current?.childNodes;
          nodes && nodes.length > 0 && ref.current?.removeChild(nodes[0]);
        }}
      >
        Remove
      </button>
      <ul ref={ref} />
    </div>
  );
};

Reactless.mount(document.body, <App />);
