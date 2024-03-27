"use client";

import React from "react";

interface MCQProps {
  id: number;
  question: string;
  options: number[];
}

export default function MCQ({ id, question, options }: MCQProps): JSX.Element {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <p className="mb-4 font-semibold">{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="radio"
              id={`${id}_${index}`}
              name={id.toString()}
              value={option}
              className="mr-2"
            />
            <label htmlFor={`${id}_${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
