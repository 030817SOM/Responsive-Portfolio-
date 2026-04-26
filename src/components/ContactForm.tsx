import { useState, type ChangeEvent, type FormEvent } from "react";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const text = await res.text();
            alert(text);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full h-12 rounded-full bg-card border border-border px-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full h-12 rounded-full bg-card border border-border px-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
                type="text"
                placeholder="Enter your subject"
                onChange={handleChange}
                className="w-full h-12 rounded-full bg-card border border-border px-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
                placeholder="Enter your message"
                rows={4}
                onChange={handleChange}
                className="w-full rounded-2xl bg-card border border-border px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
                type="submit"
                className="w-full h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[var(--glow-cyan-sm)]"
            >
                Submit
            </button>
        </form>
    );
}

export default ContactForm;