import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState("Rojoni");
    const emailState = useInputState('rojoni@sojoni.go');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form data", name);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            placeholder="Enter your name..."
          />
          <br />
          <br /> */}
          <input  {...emailState} type="email" name="email" placeholder="Enter your email..." />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
};

export default HookForm;
