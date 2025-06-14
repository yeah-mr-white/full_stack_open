import { useState } from "react";

const Button = (props) => {
    return (
        <>
            <button onClick={props.onClick}>{props.text}</button>
        </>
    );
};

const StatisticsLine = ({ good, neutral, bad, clicks, average, positive }) => {
    if (clicks === 0) {
        return <div>No feedback given</div>;
    }

    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>all</td>
                        <td>{clicks}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{average.toFixed(1)}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{positive.toFixed(1)} %</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [clicks, allClicks] = useState(0);

    const goodBtnHandler = () => {
        setGood(good + 1);
        allClicks(clicks + 1);
    };
    const neutralBtnHandler = () => {
        setNeutral(neutral + 1);
        allClicks(clicks + 1);
    };
    const badBtnHandler = () => {
        setBad(bad + 1);
        allClicks(clicks + 1);
    };

    const average = (good - bad) / clicks;
    const positive = (good / clicks) * 100;

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={goodBtnHandler} text="good" />
            <Button onClick={neutralBtnHandler} text="neutral" />
            <Button onClick={badBtnHandler} text="bad" />
            <h1>statistics</h1>
            <StatisticsLine
                good={good}
                neutral={neutral}
                bad={bad}
                all={clicks}
                average={average}
                positive={positive}
                clicks={clicks}
            />
        </div>
    );
};

export default App;
