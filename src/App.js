import './App.css';

function App() {
  return (
    <div className='container'>
      <form className='form'>

        <div className='field-container item-container'>
          <label>username</label>
          <input />
        </div>

        <div className='field-container item-container'>
          <label>password</label>
          <input type='password' />
        </div>

        <div className='button-container item-container'>
          <button type='button'>Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
