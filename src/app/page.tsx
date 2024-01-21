"use client";

import { atom, useRecoilState } from "recoil";
import "./home.css"
import requestAnswer from "./lib/requestAnswer";

const inputValueAtom = atom({
  key: "input",
  default: "",
});

const answerAtom = atom({
  key: "answer",
  default: "",
});

export default function Home() {
  const [inputValue, setInputValue] = useRecoilState(inputValueAtom);
  const [answer, setAnswer] = useRecoilState(answerAtom);

  function changeInput (e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
  }

  async function sendInput () { 
    const answer = await requestAnswer(inputValue);
    setAnswer(answer);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="answer">
        <h1 className="text-4xl font-bold">Azure OpenAI Chat</h1>
        <p className="answer">{answer}</p>
      </div>
      <div className="input">
        <textarea value={inputValue} onChange={changeInput}></textarea>
        <button onClick={sendInput}>送信</button>
      </div>
    </main>
  );
}
