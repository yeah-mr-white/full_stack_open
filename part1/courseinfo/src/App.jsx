import Part from "./Part";

const Header = (props) => {
    return <h1>{props.name}</h1>;
};

const Content = ({ parts }) => {
    return (
        <>
            <Part name={parts[0].name} exercises={parts[0].exercises} />
            <Part name={parts[1].name} exercises={parts[1].exercises} />
            <Part name={parts[2].name} exercises={parts[2].exercises} />
        </>
    );
};

const Total = ({ parts }) => {
    return (
        <>
            <p>
                Number of exercises{" "}
                {parts[0].exercises + parts[1].exercises + parts[2].exercises}
            </p>
        </>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
