import { useRef } from "react";

function FeedbackPage() {
    const emailInput = useRef();
    const feedback = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const email = emailInput.current.value;
        const feedbackVal = feedback.current.value;

        console.log("Values", { email, feedbackVal });

        fetch("/api/feedback", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                feedback: feedbackVal,
            }),
        })
            .then((response) =>
                response.json().then((data) => console.log("Data Res", data))
            )
            .catch((e) => {
                console.log(e.message);
            });
    }

    return (
        <div>
            <form name='feedback-form'>
                <section name='feedback'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            ref={emailInput}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor='feedback'>Feedback</label>
                        <textarea
                            id='feedback'
                            name='feedback'
                            ref={feedback}
                        />
                    </div>
                </section>
                <button onClick={handleSubmit}>Submit Button </button>
            </form>
        </div>
    );
}

export default FeedbackPage;
