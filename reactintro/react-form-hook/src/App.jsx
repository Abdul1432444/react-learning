import React from "react";

import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log("submitting the data", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "min len atleast 3 " },
            maxLength: { value: 6, message: "max len atmost 6" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label>Middle Name:</label>
        <input {...register("middleName")} />
      </div>
      <div>
        <label>Last Name:</label>
        <input {...register("lastName")} />
      </div>
      <button type="onSubmit">Submit</button>
    </form>
  );
};

export default App;
