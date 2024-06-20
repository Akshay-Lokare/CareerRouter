import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    return(
        <div className="career-details">
            <h2> Career Details for {career.title} </h2>
            <h2> Salary - {career.salary} </h2>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    );

}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/'+ id);

    if(!res.ok){
        throw Error('Cannot find this career');
    }

    return res.json();
}