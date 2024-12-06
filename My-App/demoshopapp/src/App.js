import logo from "./logo.svg";
import "./App.css";
import "./components/Items";
import Item from "./components/Items";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDay: "21",
      itemMonth: "08",
      itemYear: "2022",
    },

    {
      itemName: "SurExcel",
      itemDay: "22",
      itemMonth: "09",
      itemYear: "2023",
    },

    {
      itemName: "Tide",
      itemDay: "23",
      itemMonth: "10",
      itemYear: "2024",
    },

    {
      itemName: "Vimal",
      itemDay: "24",
      itemMonth: "09",
      itemYear: "2025",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>
          Hello JEE mai hu aapki first item.
        </Item>

        <ItemDate
          day={response[0].itemDay}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].itemDay}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>
        <Item name={response[2].itemName}></Item>
        <ItemDate
          day={response[2].itemDay}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>
        <Item name={response[3].itemName}></Item>
        <ItemDate
          day={response[3].itemDay}
          month={response[3].itemMonth}
          year={response[3].itemYear}
        ></ItemDate>
        <div className="App">Hello JEE</div>
      </Card>
    </div>
  );
}

export default App;
