import Inactive from '../../src';

const Item = ({ children }: { children?: JSX.Children }) => {
  return <li>{children}</li>;
};

const App = () => {
  const ref = Inactive.createRef();
  let count = 0;
  return (
    <div>
      <button
        onClick={() => {
          const item = <Item>Item {count++}</Item>;
          item && ref.current?.append(item);
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

Inactive.mount(document.body, <App />);
