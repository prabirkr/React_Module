import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  add, 
  subtract, 
  divide, 
  modulo,
  reset 
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperation = (operation) => {
    const value = Number(inputValue);

    switch (operation) {
      case 'add':
        dispatch(add(value));
        break;
      case 'subtract':
        dispatch(subtract(value));
        break;
      case 'divide':
        dispatch(divide(value));
        break;
      case 'modulo':
        dispatch(modulo(value));
        break;
      default:
        break;
    }
    setInputValue(''); 
  };

  return (
    <>
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-4xl mb-4 font-bold text-gray-800 text-center">Counter: {count}</h1>
        <div className="mb-4">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter a value"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => handleOperation('add')}
          >
            Add
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            onClick={() => handleOperation('subtract')}
          >
            Subtract
          </button>
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            onClick={() => handleOperation('divide')}
          >
            Divide
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={() => handleOperation('modulo')}
          >
            Modulo
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
 
  </>
 );
};

export default Counter;
