
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);




function App() {

  const data = {
    labels: [],
    datasets: [{
      label: 'Poll',
      data: [3, 24],
      backgroundColor: ['#00000045', '#208da1'],
      borderColor: ['#fff', '#fff'],
      circumference: 180,
      rotation: 270,
      borderWidth: 0,
      cutout: "85.6%",
    }]
  }

  const options = {

  }

  return <KanbanBoard />;


  // return (
  //   <div className=" pb-7 widgets-container rounded-lg w-[100%]">
  //   <div className='text-[#0A3D5D] absolute z-[1] font-bold text-[20px] top-1 left-0'></div>

  //   <div className="bg-white h-fit p-5 rounded-md shadow-lg widget">
  //       <div className='category-widget'>
  //           อุณหภูมิ DSPS8266
  //       </div>
  //       <div className='absolute top-[6rem]'>57</div>
  //       <div className='gauge-widget'>
  //           <Doughnut data={data} options={options}>

  //           </Doughnut>
  //       </div>
  //   </div>
  //   </div>
  // )


}

export default App;
