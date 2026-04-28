const testimonials = [
    {
        name: "Sara Chen",
        role: "Senior Developer at Google",
        image: "https://i.pravatar.cc/150?img=47",
        content:
            "Honestly didn't expect much when I first tried it, but CodeFlow just gets it. It picks up on how I write and suggests exactly what I was about to type. Debugging used to ruin my evenings — not anymore.",
    },
    {
        name: "James Wright",
        role: "Full Stack Engineer at Stripe",
        image: "https://i.pravatar.cc/150?img=12",
        content:
            "Our whole team made the switch about 3 months ago and we're not going back. It's not just fast — it actually understands what you're trying to build. Feels less like a tool and more like a teammate.",
    },
    {
        name: "Priya Patel",
        role: "DevOps Engineer at Vercel",
        image: "https://i.pravatar.cc/150?img=32",
        content:
            "I shipped a full feature last week in half the time it normally takes me. The test generation is scary good — it caught a bug I would have definitely missed. This thing pays for itself every single sprint.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">

                    {/* Left side - header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            What developers are saying about us.
                        </h2>
                        <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
                            Everything you need to build, test, and deploy applications with
                            AI-powered development tools.
                        </p>
                    </div>

                    {/* Right side - testimonials */}
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-6 sm:space-y-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                "
                                            </div>
                                        </div>

                                        <div className="flex-grow">
                                            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                                                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}