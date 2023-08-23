const BASEURL = "http://localhost:5000";

export const POSTDATA = async (endpoing, form) => {
    const response = await fetch(`${BASEURL}${endpoing}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })

    const responseData = await response.json();
    return responseData;
}