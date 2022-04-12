import React,{useState}from 'react'
import DatePicker from 'sassy-datepicker';
// import Calendar from 'react-calendar/dist/umd/Calendar';

// import 'react-calendar/dist/Calendar.css';

// const Slot = () => {
//     const [value, onChange] = useState(new Date());

//     return (
//       <div>
//         <Calendar onChange={onChange} value={value} />
//       </div>
//     );
// }





const Slot = ({date}) => {
    const onChange = (date) => {
        console.log(date.toString());
        const changedDate = date.toString();
      };
    
      return (
        <DatePicker onChange={onChange} />
      );
    }

export default Slot