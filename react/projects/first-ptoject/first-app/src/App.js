import logo from "./logo.svg";
import "./App.css";
import "./balo/style.css";
import "./balo/script";

const App = () => {
  return (
    <div>
      <div class="name">
        <NewBlock class="name"/>
      </div>
      <Form/>
    </div>
  );
};

//Компоненты
const NewBlock = () => {
  return <div>Здрасти!</div>;
};
const Form = () => {
  return <form class="form">
  <h2>Ваша почта</h2>
  <input
    type="text"
    name="email"
    class="email"
    placeholder="example@example.com"
  />
  <h2>Что мы можем использовать для вас?</h2>
  <textarea
    type="text"
    name="question"
    placeholder="Введите текст"
  ></textarea>
  <input type="submit" />
</form>
};
//компоненты
export default App;
