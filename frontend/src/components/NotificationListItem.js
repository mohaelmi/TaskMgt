import React from 'react'

function NotificationListItem({ task, timeDifference }) {
    console.log(timeDifference);

    return (
      <section className=" border-b-gray-700 bg-red-200 flex flex-col items-start justify-end w-96 rounded-md p-2 mt-5">
        <div className="flex flex-row justify-around">
          <p>{`${task.title} will start in   ${timeDifference} minutes `}</p>
          {/* <button className="font-bold text-lg flex items-end justify-end">x</button> */}
        </div>
      </section>
    );
}

export default NotificationListItem


// const NotificationsContent = ({ task, timeDifference }) => {
//   console.log(timeDifference);

//   return (
//     <section className=" border-b-gray-700 bg-red-200 flex flex-col items-start justify-end w-96 rounded-md p-2 mt-5">
//       <div className="flex flex-row justify-around">
//         <p>{`${task.title} will start in   ${timeDifference} minutes `}</p>
//         {/* <button className="font-bold text-lg flex items-end justify-end">x</button> */}
//       </div>
//     </section>
//   );
// };
