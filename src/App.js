import { useFormik } from "formik";
import * as Yup from "yup";



function App() {
  const schema = Yup.object().shape({
    name:Yup.string().required()
  

   } );
  const form = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema:schema
  });

  const { values, handleChange, handleSubmit,errors } = form;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="">name</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name ? errors.name:null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;