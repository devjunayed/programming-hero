import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignupSubmit = data => {
    console.log('Sign up data: ', data) ;
  }

  const handleUpdateProfile = data => {
    console.log('Update data: ', data) ;
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        handleSubmit={handleSignupSubmit}
        formTitle={"Sign Up"}
        submitButtonText='Sign Up'
      >
        <div>
          <h2>Sign Up</h2>
          <p>please sing up now</p>
        </div>
      </ReusableForm>


      <ReusableForm
        handleSubmit={handleUpdateProfile}
        formTitle={"Profile Updated"}
        submitButtonText='Update'
      ></ReusableForm>
    </>
  )
}

export default App
