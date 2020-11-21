import Reactless from '../../src';

const Content = ({ name }: { name: string }) => {
  return (
    <>
      <p>{name} A</p>
      <p>{name} B</p>
    </>
  );
};

const Container = ({ children }: { children: JSX.Children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Container>
        <Content name="fragment" />
      </Container>
    </div>
  );
};

Reactless.mount(document.body, <App />);
