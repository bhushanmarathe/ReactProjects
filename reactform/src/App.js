import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko stimulate karte hai
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("form submitted", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>FirstName</label>
          <input
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className="error-message">
              First name is required
            </p>
          )}
        </div>

        <div>
          <label>MiddleName</label>
          <input
            className={errors.middleName ? "input-error" : ""}
            {...register("middleName", { required: true, maxLength: 20 })}
          />
          {errors.middleName?.type === "required" && (
            <p role="alert" className="error-message">
              Middle name is required
            </p>
          )}
        </div>

        <div>
          <label>LastName</label>
          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName", { required: true, maxLength: 20 })}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert" className="error-message">
              last name is required
            </p>
          )}
        </div>

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
