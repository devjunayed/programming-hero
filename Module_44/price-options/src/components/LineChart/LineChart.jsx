import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {


    const mathMarks = [
        { "id": 1, "name": "John Smith", "math": 8, "physics": 85, "chemistry": 92 },
        { "id": 2, "name": "Emily Johnson", "math": 2, "physics": 88, "chemistry": 89 },
        { "id": 3, "name": "Michael Brown", "math": 8.5, "physics": 91, "chemistry": 87 },
        { "id": 4, "name": "Sophia Lee", "math": 88, "physics": 90, "chemistry": 93 },
        { "id": 5, "name": "William Davis", "math": 90, "physics": 87, "chemistry": 84 },
        { "id": 6, "name": "Olivia Wilson", "math": 92, "physics": 89, "chemistry": 92 },
        { "id": 7, "name": "James Martinez", "math": 95, "physics": 93, "chemistry": 94 },
        { "id": 8, "name": "Emma Garcia", "math": 93, "physics": 86, "chemistry": 88 },
        { "id": 9, "name": "Benjamin Rodriguez", "math": 91, "physics": 94, "chemistry": 90 },
        { "id": 10, "name": "Ava Hernandez", "math": 89, "physics": 88, "chemistry": 91 }
    ]
        ;


    return (
        <div>
            <LChart width={500} height={500} data={mathMarks}>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
                <XAxis height={200}></XAxis>
                <YAxis height={200}></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;