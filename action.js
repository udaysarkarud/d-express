const clients = [
    {
        clientText: `“The ease of delivery is one that I depended on when I
        was bedriden and couldn’t even walk. Their services is awesome. The ease of delivery is one that I depended on when I was bedriden and couldn’t even walk. Their services is awesome.”`,
        clientName: `Isidro F. Shipman`
    },
    {
        clientText: `“Before we move on to fake testimonials, let’s start from the  beginning. How do we define customer. Before we move on to fake testimonials, let’s start from the  beginning. How do we define customer”`,
        clientName: `Lisa J. Lynch`
    },
    {
        clientText: `“You see them all the time on sellers’ websites, review sites, social media platforms, and so on. You see them all the time on sellers’ websites, review sites, social media platforms, and so on.”`,
        clientName: `Anissa M. Harmon`
    },
    {
        clientText: `“Testimonials represent a social proof, a vote of confidence for your business. In the best scenario. Testimonials represent a social proof, a vote of confidence for your business. In the best scenario.”`,
        clientName: `Delores J. Sessions`
    },

]

let testimonialCount = 0
const testimonial = document.getElementById('testimonial')
setInterval(() => {
    if (testimonialCount >= clients.length) {
        testimonialCount = 0
    }
    testimonial.textContent = ''
    testimonial.innerHTML = `
    <p class="text-center text-lg-start">${clients[testimonialCount].clientText}</p>
    <h4 class="fs-5 text-primary fw-normal text-center text-lg-start">- ${clients[testimonialCount].clientName}</h4>
    `
    testimonialCount++
}, 3000)


