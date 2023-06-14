import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

const data = [
    {sign:"Hola", value: 10},
    {sign:"Buenos dias", value: 15},
    {sign:"Gracias", value: 5},
    {sign:"Porfavor", value: 8},
    {sign:"No entiendo", value: 20}
]


const Rechart = () => {

    return (
        <div className="grid grid-cols-1 grid-rows-2 content-center chart">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="Hola" stroke="#2196F3" strokeWidth={3} />
          <Line
            type="monotone"
            dataKey="Buenos días"
            stroke="#F44236"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="Gracias" stroke="#FFCA29" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="sign" />
          <YAxis/>
          <Tooltip />
          <Legend />
        </LineChart>
        </div>
      );


}

export default Rechart;