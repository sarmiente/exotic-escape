"use server"

export async function sendEmail(formData: { get: (arg0: string) => any; }) {
    const mail = formData.get("mail");
    if (!mail) {
        return alert("Please provide your email")
    }
    console.log(mail);
    
}