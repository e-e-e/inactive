import Reactless from '../../src';

const Item = ({ name }: { name: string }) => {
  return <li>{name}</li>;
};

const App = () => {
  const names = ['one', 'two', 'three', 'four'];
  return (
    <div>
      <h1>A list</h1>
      <ul>
        {names.map((name) => (
          <Item name={name} />
        ))}
      </ul>
    </div>
  );
};

document.body.append(App());
