import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Applai has completely transformed my job search process. The AI-generated CVs and cover letters are tailored perfectly to each job, saving me hours of work and increasing my chances of landing interviews.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'With Applai, I was able to create a professional resume and cover letter in minutes. The personalized approach made me stand out to recruiters, and I secured my dream job faster than I expected.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Tailkits Creator',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Applai is a game-changer! The AI-driven customization of my job applications made me feel confident and prepared. It’s like having a personal career coach at my fingertips.',
    },
    {
        name: 'Anonymous author',
        role: 'Doing something',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        quote: 'I was overwhelmed with the job application process until I found Applai. The platform made it easy to create tailored resumes and cover letters, and I started getting responses from employers almost immediately.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Senior Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        quote: 'Applai redefines job searching. The AI-generated documents are not only professional but also highly personalized, giving me a competitive edge in the job market.',
    },
    {
        name: 'Oketa Fred',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'I absolutely love Applai! It simplifies the job search process by creating tailored applications that truly reflect my skills and experiences. Highly recommended!',
    },
    {
        name: 'Zeki',
        role: 'Founder of ChatExtend',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'Using Applai has been like unlocking a secret weapon for job applications. The AI-generated resumes and cover letters are spot-on and have helped me land interviews effortlessly.',
    },
    {
        name: 'Joseph Kitheka',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'Applai has revolutionized the way I apply for jobs. The personalized CVs and cover letters have significantly improved my response rate from employers. It’s a must-have tool for job seekers!',
    },
    {
        name: 'Khatab Wedaa',
        role: 'MerakiUI Creator',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        quote: 'Applai is an elegant and efficient solution for job seekers. The AI-generated documents are professional and tailored, making the application process seamless and stress-free.',
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'TailwindAwesome Creator',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'I love Applai ❤️. The platform makes it incredibly easy to create job-specific applications that stand out. It’s a lifesaver for anyone looking to streamline their job search.',
    },
    {
        name: 'Eric Ampire',
        role: 'Mobile Engineer at @BRPNews • @GoogleDevExpert for Android',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',
        quote: 'Applai is the perfect solution for job seekers who want to create professional and personalized applications without any hassle. The AI does all the heavy lifting, and the results are outstanding.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        quote: 'Applai is so well-designed that even with minimal effort, I was able to create job applications that truly impressed recruiters. It’s a must-have tool for anyone serious about their career.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
                        <p className="text-body mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
