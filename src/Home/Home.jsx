import "./Home.css";
import {
  AiOutlineDollar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { FaHandsClapping } from "react-icons/fa6";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { BiSearchAlt2 } from "react-icons/bi";
const Home = () => {
  const data = [
    {
      name: "Jan",
      value: 6,
    },
    {
      name: "Feb",
      value: 4,
    },
    {
      name: "Mar",
      value: 9,
    },
    {
      name: "Apr",
      value: 7,
    },
    {
      name: "May",
      value: 8,
    },
    {
      name: "Jun",
      value: 3,
    },
    {
      name: "Jul",
      value: 8,
    },
    {
      name: "Aug",
      value: 10,
    },
    {
      name: "Sep",
      value: 9,
    },
    {
      name: "Oct",
      value: 7,
    },
    {
      name: "Nov",
      value: 6,
    },
    {
      name: "Dec",
      value: 7,
    },
  ];

  const dataPie = [
    { name: "Group A", value: 20 },
    { name: "Group B", value: 35 },
    { name: "Group C", value: 45 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <main className="main-container">
      <div className="header">
        <div className="name">
          Hello Shahrukh <FaHandsClapping />
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <AiOutlineDollar className="card_icon" />
          </div>
          <div>
            <h5>Earning</h5>
            <h3>$198k</h3>
            <h4>
              <AiOutlineArrowUp />
              37.8%
            </h4>
            <p>this month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <TbNotes className="card_icon" />
          </div>
          <div>
            <h5>Orders</h5>
            <h3>$2.4k</h3>
            <h4>
              <AiOutlineArrowDown />
              2%
            </h4>
            <p>this month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <RiCustomerService2Fill className="card_icon" />
          </div>
          <div>
            <h5>Balance</h5>
            <h3>$2.4k</h3>
            <h4>
              <AiOutlineArrowDown />
              2%
            </h4>
            <p>this month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <BsHandbag className="card_icon" />
          </div>
          <div>
            <h5>Total Sales</h5>
            <h3>$89l</h3>
            <h4>
              <AiOutlineArrowUp />
              10%
            </h4>
            <p>this week</p>
          </div>
        </div>
      </div>
      <div className="middle-chart-container">
        <div className="bar-chart">
          <div className="header-chart">
            <div className="overview">
              <h2>OverView</h2>
              <h4>Monthly Earning</h4>
            </div>
            <div className="Quantity">
              Quantity <AiOutlineArrowDown />
            </div>
          </div>
          <BarChart width={750} height={240} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8"></Bar>
          </BarChart>
        </div>
        <div className="pie-chart">
          <div className="customer">
            <h2>Customers</h2>
            <h4>Customers that buy products</h4>
          </div>
          <PieChart width={800} height={400}>
            <Pie
              data={dataPie}
              cx={180}
              cy={200}
              innerRadius={50}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <div className="footer-product-container">
        <div className="footer-head">
          <div>
            <h3>Product Sell</h3>
          </div>
          <div className="search-days">
            <h4>
              <BiSearchAlt2 />
              Search
            </h4>
            <h5>
              Last 30 days
              <AiOutlineArrowDown />
            </h5>
          </div>
        </div>
        <table>
          <tr>
            <th className="product-name" style={{ width: "60%" }}>
              <h3>Product Name</h3>
            </th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
          <tr>
            <td>
              <h3>Abstract 3D</h3>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <h3>Sarphens Illustration</h3>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
        </table>
      </div>
    </main>
  );
};

export default Home;
