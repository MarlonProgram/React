import ReactDOM from 'react-dom';

const MyButton = () => {
  return <button>Click Me!</button>;
};

export default function MyApp() {
  return (
    <div>
      <h1>I'm a Button component</h1>
      <MyButton />
    </div>
  );
}
