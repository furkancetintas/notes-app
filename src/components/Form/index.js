import React, { useState } from 'react';
import { addNote } from '../../redux/notes/notesSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

  const dispatch = useDispatch();

  const handleCreateNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), title, description, color }));
    console.log(color);

    setTitle('');
    setDescription('');
    setColor('');
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleCreateNote}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="px-4 py-2 bg-white rounded-t-lg">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <input
              type="text"
              className="w-full px-0 text-lg text-gray-900 bg-white border-0 focus:ring-blue-500"
              placeholder="Başlık Girin"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-blue-500"
              placeholder="Not Açıklaması ekleyin..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t">
            <div className="flex">
              <div className="flex items-center rounded mr-2">
                <input
                  required
                  onChange={() => setColor('#ec4899')}
                  id="bordered-radio-1"
                  type="radio"
                  value={color}
                  name="bordered-radio"
                  className="bg-pink-500 w-4 h-4 rounded-full cursor-pointer appearance-none focus:ring-pink-600 focus:ring-2"
                />
              </div>
              <div className="flex items-center rounded mr-2">
                <input
                  required
                  onChange={() => setColor('#a855f7')}
                  id="bordered-radio-2"
                  type="radio"
                  value={color}
                  name="bordered-radio"
                  className="bg-purple-500 w-4 h-4 rounded-full cursor-pointer appearance-none focus:ring-purple-600 focus:ring-2"
                />
              </div>
              <div className="flex items-center rounded mr-2">
                <input
                  required
                  onChange={() => setColor('#eab308')}
                  id="bordered-radio-3"
                  type="radio"
                  value={color}
                  name="bordered-radio"
                  className="bg-yellow-500 w-4 h-4 rounded-full cursor-pointer appearance-none focus:ring-yellow-600 focus:ring-2"
                />
              </div>
              <div className="flex items-center rounded mr-2">
                <input
                  required
                  onChange={() => setColor('#3b82f6')}
                  id="bordered-radio-3"
                  type="radio"
                  value={color}
                  name="bordered-radio"
                  className="bg-blue-500 w-4 h-4 rounded-full cursor-pointer appearance-none focus:ring-blue-600 focus:ring-2"
                />
              </div>
              <div className="flex items-center rounded mr-2">
                <input
                  required
                  onChange={() => setColor('#22c55e')}
                  id="bordered-radio-3"
                  type="radio"
                  value={color}
                  name="bordered-radio"
                  className="bg-green-500 w-4 h-4 rounded-full cursor-pointer appearance-none focus:ring-green-600 focus:ring-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              Not Oluştur
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
