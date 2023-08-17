import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST"
            });
            const parsedResponse = await response.text();
            localStorage.setItem("token", parsedResponse);
            toast.success("Login Successfull", {
                position: toast.POSITION.TOP_CENTER
            });
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <ToastContainer />
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, unde quam rerum voluptatem, ipsa placeat, adipisci excepturi eos perspiciatis fugiat quisquam? Error eligendi, ipsam repellendus hic, maiores ad est iure, delectus inventore facere harum nihil. Consectetur, debitis. Cumque sapiente voluptatum labore, doloribus facilis ipsa suscipit voluptates earum obcaecati aperiam error deserunt delectus quaerat omnis atque totam consequatur neque? Accusamus velit deserunt est totam, aperiam aliquam alias quis minima voluptatibus voluptatum obcaecati dolorem, suscipit mollitia officiis omnis incidunt modi inventore sint sit voluptates. Reiciendis, reprehenderit aspernatur cum ut placeat rem dolor libero magni optio amet! Ipsam sapiente aliquam eveniet ullam repellat? Hic animi iste ad debitis deleniti distinctio accusamus ipsam, eaque ratione, ducimus aut eveniet beatae deserunt eos sapiente veritatis et magnam explicabo corrupti sunt. Consequuntur debitis adipisci itaque dolorum quos odio libero minima aspernatur similique, veritatis laborum velit pariatur provident vero aperiam? Cupiditate magnam, quibusdam rem assumenda rerum quis blanditiis maxime at dolorum, iste vitae magni nesciunt labore iusto adipisci eius. Veniam, sunt. Rerum quasi minima sit laudantium quia, exercitationem quibusdam tempore voluptatibus corrupti error esse delectus incidunt eligendi, distinctio alias impedit! Sed eaque nemo voluptas quisquam, asperiores dolor explicabo quod odit minus eos facere doloribus voluptates provident iure consequuntur quas veniam consectetur architecto nesciunt aspernatur amet cumque alias laborum iusto. Fugit, quis mollitia? Quam aliquid magni voluptates voluptatem iste praesentium fugit fugiat, earum necessitatibus, ad commodi. Suscipit blanditiis nulla nihil quisquam nam? Possimus quae voluptatibus harum recusandae eum. Accusantium vero dignissimos ad, ea quo molestias obcaecati aperiam ut, necessitatibus ullam saepe, aspernatur nihil tenetur eaque atque corrupti numquam. Ex molestiae delectus omnis molestias exercitationem aliquid recusandae laboriosam placeat quos vero! Officia, molestias. Iure, esse error! Dolore animi quod ipsa ducimus delectus non voluptas commodi ab, magni reiciendis veniam placeat ea voluptatum illo quidem obcaecati dolor quam necessitatibus vero tempora.</div>

            <button onClick={handleSubmit}>
                Submit
            </button>
        </>
    );
};

export default Login;
