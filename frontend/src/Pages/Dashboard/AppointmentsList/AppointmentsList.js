import { useQuery } from "@tanstack/react-query";
import React from "react";

const AppointmentsList = () => {
  const {
    data: appointmentList,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctor-portal-delta.vercel.app/all-bookings"
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointmentList?.map((appointment, i) => (
              <tr key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.patient}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsList;
