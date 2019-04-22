import React, { Component } from 'react';
import ChipAndName from './chip_and_name/Chip_and_name';
import Counter from "./counter/Counter"

const data = [
  {
  name : "Cao Ghi Danh",
  status : "untested"
  },
  {
    name : "Dinh Do Dat",
    status : "passed"
  },
  {
      name : "Nguyen Van Tach",
      status : "failed"
  },
];


class App extends Component {
  render() {
    return (
      <div>
      <div>
        {
          data.map((item,index) => {
            if(item.status === "untested") {
              return <ChipAndName name={item.name} text={item.status} color="gray" key={index} />;
            }
            else if(item.status === "passed") {
              return <ChipAndName name={item.name} text={item.status} color="green" key={index} />;
            }
            else{
              return <ChipAndName name={item.name} text={item.status} color="red" key={index} />;
            }
          }
          )
        }
      </div>
        <Counter/>
      </div>
    );
  }
}

export default App;
