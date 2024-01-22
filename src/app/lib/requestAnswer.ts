async function requestAnswer(input: string): Promise<string> {
    let answer = "";
    await new Promise((resolve) => setTimeout(() => {
        answer = input + " is the answer";
        resolve(null);
    }, 3000))

    return answer;
}

export default requestAnswer;
