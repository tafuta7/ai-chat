async function requestAnswer(input: string): Promise<string> {
    let answer = "";
    await new Promise((resolve) => setTimeout(() => {
        answer = "回答がここに表示される予定";
        resolve(null);
    }, 3000))

    return answer;
}

export default requestAnswer;
