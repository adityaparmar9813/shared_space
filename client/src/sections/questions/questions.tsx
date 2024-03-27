"use client";

import MCQ from "@/components/form/mcq";
import { questions } from "../../../public/data/questions";

export default function Questions() {
  return (
    <form>
      {questions.map((question) => {
        if (question.type === "mcq") {
          return (
            <MCQ
              key={question.id}
              id={question.id}
              question={question.question}
              options={question.options}
            />
          );
        } else {
          return null;
        }
      })}
    </form>
  );
}
